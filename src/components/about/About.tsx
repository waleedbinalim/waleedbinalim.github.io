import { Motion } from "@motionone/solid";
import { Component, For } from "solid-js";
import {
  ArduinoIcon,
  BlenderIcon,
  FramerMotionIcon,
  InkscapeIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  SolidJSIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
  WaveOne,
} from "~/assets";

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

  const logos = [
    <TypeScriptIcon />,
    <ReactIcon />,
    <FramerMotionIcon />,
    <NextJSIcon />,
    <TailwindIcon />,
    <NodeJSIcon />,
    <MongoDBIcon />,
    <BlenderIcon />,
    <SolidJSIcon />,
    <VueIcon />,
    <InkscapeIcon />,
    <ArduinoIcon />,
    <MySQLIcon />,
  ];

  return (
    <>
      <div class="w-100 bg-black [&_path]:!fill-gray-900">
        <WaveOne />
      </div>

      <section class="bg-gray-900 px-14 pb-12 text-slate-200 sm:px-36">
        <div class="grid grid-cols-1 text-left sm:grid-cols-2 sm:gap-16 sm:text-left">
          <div>
            <h1 class="pb-12 text-left text-3xl font-bold text-slate-200 sm:text-4xl">
              WORK
            </h1>
            <For each={careerInfo}>
              {(company) => (
                <div class="pb-12">
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

          <div class="grid grid-cols-1 text-left sm:gap-16 sm:text-left">
            <h1 class="text-left text-3xl font-bold text-slate-200 sm:text-4xl">
              Skills
            </h1>
            <div>
              <For each={logos}>
                {(logo, i) => (
                  <>
                    <div
                      id={`tooltip-skill-${i()}`}
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      Tooltip content
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <Motion
                      class="px-1"
                      data-tooltip-target={`tooltip-skill-${i()}`}
                      data-tooltip-trigger="hover"
                      style={{ display: "inline-block" }}
                      animate={{
                        transform: [
                          "rotate(0deg)",
                          "rotate(0deg)",
                          "rotate(0deg)",
                          "rotate(22.50deg)",
                          "rotate(0deg)",
                        ],
                      }}
                      transition={{
                        delay: i() * 0.25,
                        duration: 2,
                        easing: "linear",
                        repeat: Infinity,
                      }}
                    >
                      {logo}
                    </Motion>
                  </>
                )}
              </For>
            </div>
          </div>
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
