import { Component } from "solid-js";
import { WaveOne } from "~/assets";

export const About: Component = () => {
  return (
    <>
      <div class="w-100 bg-black [&_path]:!fill-gray-900">
        <WaveOne />
      </div>
      <section class="bg-gray-900 px-36 text-white">
        <p class=" py-8 text-4xl font-semibold text-green-400">Blegh</p>
        <p class="px-3 py-8 text-4xl font-semibold text-green-500">Blegh</p>
        <div class="min-h-4 min-w-4 mb-8 rounded-full  outline-purple-700">
          <div class="h-2 w-2 rounded-full  bg-green-700" />
        </div>
      </section>
    </>
  );
};
