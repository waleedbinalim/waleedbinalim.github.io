import { Title } from "solid-start";
import { About, Hero } from "~/components";

export const Home = () => {
  return (
    <>
      <main>
        <Title>Hello World</Title>
        <Hero />
        <About />
      </main>
    </>
  );
};

export default Home;
