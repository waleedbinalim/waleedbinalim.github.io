import { Component, For, createSignal } from "solid-js";
import { ProjectComponent } from "./project-component";

export const Projects: Component = () => {
  const [selected, setSelected] = createSignal<string>("Pulse Plus");
  const projectsArr = ["Pulse Plus", "Remotebase", "Weather App"];

  return (
    <>
      <div class="w-100 relative isolate inline-block w-full bg-black after:absolute after:-inset-0 after:-top-8 after:-z-10 after:block after:min-h-[80px] after:-skew-y-3 after:bg-white after:content-['']">
        <div class="mx-auto px-16 py-8 md:px-36">
          <div class="pb-12 text-4xl font-bold text-black">Projects</div>

          <div class="grid gap-4 md:grid-cols-5 md:gap-8">
            <div class="col-span-5 md:col-span-1">
              <For each={projectsArr}>
                {(e, i) => (
                  <>
                    <div
                      class="h-18 mb-2 rounded-xl bg-white p-4 text-sm shadow-xl"
                      classList={{
                        "border-2 border-green-300 shadow-none":
                          selected() === e,
                      }}
                      onClick={() => setSelected(e)}
                    >
                      {e}
                    </div>
                  </>
                )}
              </For>
            </div>
            <ProjectComponent
              title="Pulse Plus"
              tags={["NextJS", "D3", "Styled Components"]}
              desc={[
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
              ]}
              image="https://www.pulse.plus/images/common/pulse_plus_box.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};
