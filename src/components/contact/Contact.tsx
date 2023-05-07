import { Component } from "solid-js";

export const Contact: Component = () => {
  return (
    <div class="py-18 sm:px-18 bg-black pt-24 md:px-28">
      <div class="mb-8 text-center text-4xl font-bold text-white sm:text-left">
        Contact
      </div>
      <form class="w-70 px-8 pb-24 sm:w-80 sm:px-0">
        <div class="mb-6">
          <label for="email" class="mb-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="block w-full rounded-lg border border-gray-600 bg-gray-100 p-2.5 text-sm  placeholder-gray-400 outline-none"
            placeholder="email@domain.com"
            required
          />
        </div>
        <div class="mb-6">
          <label for="password" class="mb-2 text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="password"
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
      </form>
    </div>
  );
};
