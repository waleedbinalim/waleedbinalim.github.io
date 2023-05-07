import { Component, For } from "solid-js";

const title = "Music Label Site";
const tags = ["Sanity io", "NextJS", "Framer Motion", "Tanstack Query"];
const image = "/images/cryochamber.png";

export const ProjectsCryoChamber: Component = () => {
  return (
    <>
      <>
        <div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl md:col-span-4">
          <div class="w-100 h-36">
            <img class="h-36 w-full object-contain" src={image} alt={title} />
          </div>
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-extrabold">{title}</div>
            <p class="text-base text-gray-700">
              <span class="block">
                An beautiful minimal and responsive site for a record label.
                Site map consists of a dynamic homepage, artist roster and album
                collection. Each of which has its own route for info.
              </span>

              <br />

              <span>
                This website is built with NestJS using Incremental Site
                Generation and uses Sanity io as a CMS for Dynamic content.
                Additional features include a dark theme, pagination, sorting
                and smooth animations using Framer Motion
              </span>
            </p>

            <a
              href="https://cryo-chamber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="group relative mb-1 mr-2 mt-6 inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800">
                <span class="relative rounded-full bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  Website
                </span>
              </button>
            </a>
          </div>
          <div class="px-6 pb-2 pt-4">
            <For each={tags}>
              {(tag) => {
                return (
                  <span class="mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-gray-800 md:text-sm">
                    {tag}
                  </span>
                );
              }}
            </For>
          </div>
        </div>
      </>
    </>
  );
};
