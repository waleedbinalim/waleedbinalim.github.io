import { Title } from "solid-start";
import { About, Contact, Hero, Projects } from "~/components";

export const Home = () => {
  return (
    <>
      <main>
        <Title>Waleed Bin Alim</Title>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
