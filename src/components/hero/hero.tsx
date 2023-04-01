import { imgUrls } from "~/constants";

export const Hero = () => {
  return (
    <>
      <section class="w-100 h-screen bg-black">
        <div class="w-100 flex justify-between px-8 py-8 align-middle text-white">
          <div>
            <p class="text-lg font-semibold">
              Hi, I'm <span class="text-3xl text-green-400">Waleed</span>
            </p>
            <p class="">person on the planet</p>
            <button class="rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800">
              View Resume
            </button>
          </div>

          <div class="w-100 relative flex min-w-[300px]">
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
