import { Component, For } from "solid-js";

type Props = {
  title: string;
  tags: string[];
  desc: string | string[];
  image: string;
};

export const ProjectComponent: Component<Props> = ({
  title,
  tags,
  desc,
  image,
}) => {
  return (
    <>
      <div class="w-100 col-span-5 overflow-hidden rounded-3xl shadow-2xl md:col-span-4">
        <div class="w-100 h-36">
          <img class="h-36 w-full object-contain" src={image} alt={title} />
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
  );
};
