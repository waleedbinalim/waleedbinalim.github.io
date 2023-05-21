import { Component } from "solid-js";
import { createServerAction$, createServerData$ } from "solid-start/server";

export const Contact: Component = () => {
  let email: HTMLInputElement | undefined;
  let message: HTMLTextAreaElement | undefined;

  const [acting, { Form }] = createServerAction$(async (form: FormData) => {
    const email = form.get("email") as string;
    const message = form.get("message") as string;

    try {
      await fetch(process.env.SOLID_APP_CRAP || "", {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: { 
          "Content-Type": "application/json", 
          "X-Auth-Token": process.env.SOLID_APP_API_TOKEN || "" 
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email, message }),
      });
      return "IT WORKED";
    } catch (err) {
      console.log("IT DIDN'T WORK")
      console.log(err)
      return "IT DIDN'T WORK";
    }
  });

  return (
    <div class="py-18 sm:px-18 bg-black px-28 pt-24">
      <div class="mb-8 text-center text-4xl font-bold text-white sm:text-left">
        Contact
      </div>
      <Form class="w-70 px-8 pb-24 sm:w-80 sm:px-0">
        <div class="mb-6">
          <label for="email" class="mb-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            ref={email}
            name="email"
            id="email"
            class="block w-full rounded-lg border border-gray-600 bg-gray-100 p-2.5 text-sm  placeholder-gray-400 outline-none"
            placeholder="email@domain.com"
            required
          />
        </div>
        <div class="mb-6">
          <label for="message" class="mb-2 text-sm font-medium text-white">
            Message
          </label>
          <textarea
            ref={message}
            name="message"
            class="block w-full rounded-lg border border-gray-600 bg-gray-100 p-2.5 text-sm placeholder-gray-400 outline-none"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800 sm:w-[200px] md:w-full xl:text-2xl"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
