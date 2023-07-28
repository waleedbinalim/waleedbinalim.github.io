import { Navbar } from "~/components";
import { externalUrls } from "~/constants/external-urls";


export const BonusPage = () => {
  return (
     <>
     <Navbar/>
      <section class="w-100 h-screen pt-18 bg-black sm:pt-24">
        <div class="w-100 align-center items-center justify-center px-28 py-8 pt-20 text-white sm:grid-cols-2 xl:px-60">
              <div class="w-100 block text-center text-5xl font-bold text-green-400 lg:text-6xl">Coming Soon...</div>
        </div>

        <div class="w-100 text-center text-2xl font-bold text-slate-200 lg:text-4xl">
          In the meantime follow my 
          <a 
          class="text-green-400 underline cursor-pointer hover:text-green-600"
          href={externalUrls.artstation} 
          target="_blank" 
          >
            Artstation
          </a> page
          </div>
      </section>
    </>
  );
};

export default BonusPage;
