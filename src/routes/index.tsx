
import { Title } from "@solidjs/meta";
import { Hero, About, Contact, Projects } from "~/components";


export default function Home() {
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
