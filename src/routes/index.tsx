import { Title } from "solid-start";
import { Counter, Navbar } from "~/components";

export const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Title>Hello World</Title>
        <h1>Hello world!</h1>
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
