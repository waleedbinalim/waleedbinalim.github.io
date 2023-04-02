import { Title } from "solid-start";
import { About, Hero, Projects } from "~/components";

export const Home = () => {
  return (
    <>
      <main>
        <Title>Hello World</Title>
        <Hero />
        <About />
        <Projects />
        <div class="bg-green-400 pt-12">Yeet</div>
      </main>
    </>
  );
};

export default Home;
