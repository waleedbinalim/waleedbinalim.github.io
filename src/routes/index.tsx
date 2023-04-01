import { Title } from "solid-start";
import { Counter, Hero } from "~/components";

export const Home = () => {
  return (
    <>
      <main>
        <Title>Hello World</Title>
        <Hero />
        <Counter />
        <p>
          Visit{" "}
          <a href="https://start.solidjs.com" target="_blank">
            start.solidjs.com
          </a>{" "}
          to learn how to build SolidStart apps.
        </p>
      </main>
    </>
  );
};

export default Home;
