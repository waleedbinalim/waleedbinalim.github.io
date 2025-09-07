import { Component, For } from "solid-js";
import { SolidTyper } from "solid-typer";
import { GithubIcon, LinkedInIcon } from "~/assets";
import { imgUrls, socialsUrls } from "~/constants";
import { externalUrls } from "~/constants/external-urls";


export const Hero: Component = () => {
  const heroSocials = [
    {
      href: socialsUrls.linkedIn,
      icon: <LinkedInIcon />,
      title: "LinkedIn"
    },
    {
      href: socialsUrls.github,
      icon: <GithubIcon />,
      title: "Github"
    },
  ];

  return (

    <section class="w-100 pt-18 bg-black sm:pt-24">
      <div class="w-100 align-center grid min-w-full items-center justify-center px-28 py-8 pt-20 text-white sm:grid-cols-2 xl:px-60">
        <div class="w-100 text-center md:text-left">
          <p class="text-2xl font-semibold xl:pb-2 xl:text-5xl">
            Hi, I'm{" "}
            <span class="text-4xl text-green-400 lg:text-6xl">WALEED</span>
          </p>
          <p class="mb-4 min-w-[300px] text-xl lg:text-3xl">
            I do{" "}
            <span class=" text-2xl font-bold text-green-400 lg:text-3xl">
              <SolidTyper
                text={[
                  "Web Development",
                  "3D Designing",
                  "Vector Illustrations",
                ]}
                backspaceSpeed={30}
                typingSpeed={100}
                backspacePause={40}
                loop={true}
                cursor={true}
              />
            </span>
          </p>

          <div class="md:pb-none pb-8 md:min-w-[140px] md:max-w-[170px] xl:max-w-[250px]">
            <a href={externalUrls.resume} target="_blank">
              <button class="w-[200px] rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800 md:w-full xl:text-2xl">
                View Resume
              </button>
            </a>
            <div class="flex w-full justify-center pt-3">
              <For each={heroSocials}>
                {(item) => {

                  console.log(item.icon)

                  return (
                    <div
                      class="cursor-pointer fill-green-400 px-1 opacity-50 hover:opacity-100 [&_path]:!fill-gray-200 [&_svg]:h-6 [&_svg]:w-6 xl:[&_svg]:h-8 xl:[&_svg]:w-8 "
                      title={item.title}
                    >
                      <a href={item.href} target="_blank">
                        {item?.icon}

                      </a>
                    </div>
                  )
                }}
              </For>
            </div>
          </div>
        </div>

        <div class="w-100 relative mx-auto flex h-[200px] min-w-[200px] sm:h-[320px] sm:min-w-[300px] xl:h-[400px] xl:min-w-[400px]">
          <div class="absolute inset-0 h-full w-[200px] rotate-12 rounded-xl bg-green-300 sm:h-80 sm:w-[300px] xl:h-full xl:w-[400px]" />
          <div class="absolute inset-0 h-full w-[200px] rotate-6 rounded-xl bg-green-400 drop-shadow-xl sm:h-80 sm:w-[300px] xl:h-full xl:w-[400px]" />
          <img
            class="absolute inset-0 h-full w-[200px] rounded-xl border-2 border-green-400 drop-shadow-xl sm:w-auto xl:h-full"
            src={imgUrls.heroAvatar}
            alt="waleed-avatar"
          />
        </div>
      </div>
    </section>

  );
};
