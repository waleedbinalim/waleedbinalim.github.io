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

      <h1 class="bg-gray-900 px-24 pb-14 text-center text-3xl font-bold text-slate-200 sm:px-36 sm:text-4xl">
        WORK
      </h1>

      <section class="bg-gray-900 px-14 pb-12 text-slate-200 sm:px-36">
        <For each={careerInfo}>
          {(company, i) => (
            <div
              class="flex w-full items-baseline justify-start px-4 py-4 pb-8 text-center sm:text-left"
              classList={{
                ["sm:justify-end sm:[&>div]:w-auto"]: (+i() + 1) % 2 === 0,
              }}
            >
              <div
                class="w-full "
                classList={{ ["sm:[&>div]:w-auto"]: (+i() + 1) % 2 === 0 }}
              >
                <div class="ms:text-3xl flex items-center justify-center text-center text-2xl font-bold text-slate-200 sm:justify-start sm:pl-4 sm:text-left sm:text-4xl">
                  <div class="hidden h-8 w-8 items-center justify-center rounded-full border-4 border-slate-300 sm:flex">
                    <div class=" h-4 w-4 rounded-full bg-slate-300" />
                  </div>
                  <p class="w-full sm:pl-4">{company.company}</p>
                </div>

                <p class="text-md font-bold text-green-400 sm:pl-16 sm:text-xl">
                  {company.position}
                </p>
                <p class="text-sm text-slate-100 sm:pl-16 sm:text-lg">
                  {company.time}
                </p>
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
