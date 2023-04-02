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

      <h1 class="bg-gray-900 px-36 pb-14 text-4xl font-bold text-slate-200">
        WORK
      </h1>

      <section class="bg-gray-900 px-36 pb-12 text-slate-200">
        <For each={careerInfo}>
          {(company, i) => (
            <div
              class="flex items-baseline px-4 py-4 pb-8 "
              classList={{ ["justify-end"]: (+i() + 1) % 2 === 0 }}
            >
              <div>
                <div class="flex items-center pl-4 text-4xl font-bold text-slate-200">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-300">
                    <div class=" h-4 w-4 rounded-full bg-slate-300" />
                  </div>
                  <p class="pl-4">{company.company}</p>
                </div>

                <p class="pl-16 text-xl font-bold text-green-400">
                  {company.position}
                </p>
                <p class="text-md pl-16 text-slate-100">{company.time}</p>
              </div>
            </div>
          )}
        </For>
      </section>
      <div>
        <div class="w-100 bg-black pb-8 pt-12 text-center text-4xl font-bold text-slate-200">
          Education
        </div>

        <div class="w-100 bg-black px-32 pb-12 text-center text-3xl font-bold text-green-400">
          <p class="pb-4">
            Ghulam Ishaq Khan Institute of Engineering Sciences and Technology
          </p>
          <p class="pb-4 text-xl font-semibold text-white">
            B.Sc Electrical Engineering{" "}
            <span class="text-green-400">(Electronics)</span>
          </p>
        </div>
      </div>
    </>
  );
};
