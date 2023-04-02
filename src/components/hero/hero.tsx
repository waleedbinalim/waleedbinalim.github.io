import { imgUrls } from "~/constants";
import { SolidTyper } from "solid-typer";
import { LinkedInIcon } from "~/assets";

export const Hero = () => {
  return (
    <>
      <section class="w-100 h-screen bg-black">
        <div class="w-100 align-center mb-2 flex flex-wrap items-center justify-between px-36 py-8 pt-20 text-white">
          <div>
            <p class="text-2xl font-semibold">
              Hi, I'm <span class="text-4xl text-green-400">Waleed</span>
            </p>
            <p class="mb-4 text-xl">
              I do{" "}
              <span class="text-2xl font-bold text-green-400">
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

            <div>
              <button class="rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800">
                View Resume
              </button>
              <div>
                <div class="h-6 w-6 cursor-pointer fill-green-400 opacity-50 [&_path]:fill-gray-200">
                  <a
                    href="
                  "
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div class="w-100 relative flex min-h-[320px] min-w-[300px]">
            <div class="absolute left-0 top-0 h-80 w-[300px] rotate-12 rounded-xl bg-green-300" />
            <div class="absolute left-0 top-0 h-80 w-[300px] rotate-6 rounded-xl bg-green-400 drop-shadow-xl" />
            <img
              class="absolute left-0 top-0 h-80 rounded-xl border-2 border-green-400 drop-shadow-xl"
              src={imgUrls.heroAvatar}
              alt="waleed-avatar"
            />
          </div>
        </div>
      </section>
    </>
  );
};
