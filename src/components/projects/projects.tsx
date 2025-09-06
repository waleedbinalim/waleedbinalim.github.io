import { Component, For, Show, createSignal } from "solid-js";
import {
  ProjectsCryoChamber,
  ProjectsGridware,
  ProjectsPulsePlus,
  ProjectsRemotebase,
  ProjectsTalently,
} from "./content";

const projectsList = [
  { title: "Gridware", content: <ProjectsGridware /> },
  { title: "Talently AI", content: <ProjectsTalently /> },
  { title: "Pulse Plus", content: <ProjectsPulsePlus /> },
  { title: "Remotebase", content: <ProjectsRemotebase /> },
  { title: "Music Label Site", content: <ProjectsCryoChamber /> },
];
export const Projects: Component = () => {
  const [selected, setSelected] = createSignal<string>("Pulse Plus");

  return (
    <>
      <div class="w-100 relative isolate inline-block w-full bg-black pb-12 after:absolute after:-inset-0 after:-top-8 after:-z-10 after:block after:min-h-[80px] after:-skew-y-3 after:bg-white after:content-['']">
        <div class="sm:px-16 md:px-28 mx-auto px-8 py-8">
          <div class="pb-12 text-4xl font-bold text-black">Projects</div>
          <div class="grid gap-4 annoying-bp:grid-cols-5 annoying-bp:gap-8">
            <div class="col-span-5 annoying-bp:col-span-1 ">
              <For each={projectsList}>
                {(e) => (
                  <>
                    <div
                      class="h-18 mb-2 rounded-xl bg-white p-4 text-center text-sm shadow-xl"
                      classList={{
                        "border-2 border-green-300 shadow-none":
                          selected() === e.title,
                      }}
                      onClick={() => setSelected(e.title)}
                    >
                      {e.title}
                    </div>
                  </>
                )}
              </For>
            </div>

            <For each={projectsList}>
              {(e) => (
                <>
                  <Show when={selected() === e?.title}>
                    <>{e.content}</>
                  </Show>
                </>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
};
