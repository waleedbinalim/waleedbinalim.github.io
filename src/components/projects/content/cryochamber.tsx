import { Component, For } from "solid-js";

const title = "Record Label Site";
const tags = ["Sanity io", "NextJS", "Framer Motion"];
const image = "";
const desc = "lorem";

export const ProjectsCryoChamber: Component = () => {
  return (
    <>
      <>
        <div class="w-100 col-span-5 min-h-[344px] overflow-hidden rounded-3xl shadow-2xl md:col-span-4">
          <div class="w-100 h-36">
            <img
              class="h-36 w-full object-contain"
              src={image}
              alt={title}
              elementtiming={""}
              fetchpriority={"high"}
            />
          </div>
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-extrabold">{title}</div>
            <p class="text-base text-gray-700">{desc}</p>
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
