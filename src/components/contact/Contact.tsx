import { Component } from "solid-js";

export const Contact: Component = () => {
  return (
    <div class="py-18 px-18 bg-black pt-24 md:px-36">
      <div class="mb-8 text-4xl font-bold text-white">Contact</div>
      <form class="w-80 pb-24">
        <div class="mb-6">
          <label for="email" class="mb-2 block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5  text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="password"
            class="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5  text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-[200px] rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800 md:w-full xl:text-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
