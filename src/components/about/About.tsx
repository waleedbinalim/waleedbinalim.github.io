import { Component, For } from "solid-js";
import { WaveOne } from "~/assets";

export const About: Component = () => {
  const careerInfo = [
    {
      company: "CreativeMorph",
      position: "NextJS / React Developer",
      time: "( 2021 - PRESENT )",
    },
    {
      company: "PTCL (Multan)",
      position: "Intern",
      time: "( Summer 2019 )",
    },
    {
      company: "Hussain Mills Ltd.",
      position: "Trainee Electrical Engineer",
      time: "( Summer 2018 )",
    },
  ];

  return (
    <>
      <div class="w-100 bg-black [&_path]:!fill-gray-900">
        <WaveOne />
      </div>

      <h1 class="bg-gray-900 px-24 pb-14 text-center text-3xl font-bold text-slate-200 sm:px-36 sm:pb-24 sm:text-4xl">
        WORK
      </h1>

      <section class="bg-gray-900 px-14 pb-12 text-slate-200 sm:px-36">
        <div class="grid text-left sm:grid-cols-2 sm:gap-24 sm:text-left">
          <For each={careerInfo}>
            {(company, i) => (
              <div
                class="mt pb-16 sm:h-full "
                classList={{ ["sm:mt-32"]: (+i() + 1) % 2 === 0 }}
              >
                <p class="flex text-3xl font-bold sm:text-4xl">
                  {company.company}
                </p>
                <p class="text-2xl font-semibold text-green-400">
                  {company.position}
                </p>
                <p class="text-md text-slate-100">{company.time}</p>
              </div>
            )}
          </For>
        </div>
      </section>
      <div>
        <div class="w-100 bg-black pb-8 pt-12 text-center text-4xl font-bold text-slate-200">
          Education
        </div>

        <div class="w-100 bg-black px-16 pb-12 text-center text-xl font-bold text-green-400 sm:px-32 sm:text-3xl">
          <p class="pb-4">
            Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
          </p>
          <p class="pb-4 text-sm font-semibold text-white sm:text-xl">
            B.Sc Electrical Engineering{" "}
            <span class="text-green-400">(Electronics)</span>
          </p>
        </div>
      </div>
    </>
  );
};
