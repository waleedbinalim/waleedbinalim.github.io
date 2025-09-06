import { Component, For } from "solid-js";

const title = "Gridware";
const tags = ["Amazon EC2", "Nginx", "uPlot", "Mapbox"];

export const ProjectsGridware: Component = () => {
  return (
    <>
      <>
        <div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl annoying-bp:col-span-4">
          <div class="w-100 h-36">

            <img
              class="h-36 w-full object-contain"
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeXh-u2bq-hwG1dLLsMGTml1OaKQLegEeQA&s"}
              alt={title}
            />
          </div>
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-extrabold">{title}</div>
            <p class="text-base text-gray-700">
              <span class="block">
                Developing data analytical dashboards for Power grids deployed in ~11 States across US
              </span>

              <br />

              <span>
                Project Sherlock is built with Vite + React. Additional tools include mapbox, uplot, zustand and tanstack query
              </span>
            </p>

            <a
              href="https://www.gridware.io/"
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
                  <span class="md:text-sm mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-xs font-semibold text-gray-800">
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
