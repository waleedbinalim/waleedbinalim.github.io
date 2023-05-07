import { Component, For } from "solid-js";
import { imgUrls } from "~/constants";

const title = "Remotebase";
const tags = ["Amplify", "React", "GraphQL", "TypeScript"];

export const ProjectsRemotebase: Component = () => {
  return (
    <>
      <>
        <div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl md:col-span-4">
          <div class="w-100 h-36">
            <img
              class="h-36 w-full object-contain"
              src={imgUrls.projectsRemotebase}
              alt={title}
              elementtiming={""}
              fetchpriority={"high"}
            />
          </div>
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-extrabold">{title}</div>
            <p class="text-base text-gray-700">
              <span class="block">
                Platform developed in collaboration alongside a team of remote
                engineers. Remotebase, the leading tech start-up of Pakistan,
                creates a solution to lack of transparency and communication
                lags during job hiring.
              </span>
              <br />
              {/*  */}
              <span>
                This is an automated hiring process application! Now one can, at
                their OWN pace and convenience, take tests as per their domain
                be a part of the hiring process at Remotebase! With full
                transparency and no time constraints.
              </span>
              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}
            </p>

            <a
              href="https://talent.remotebase.com/"
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
