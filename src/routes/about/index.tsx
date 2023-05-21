import { A } from "@solidjs/router";
import { Title } from "solid-start";
import { Counter } from "~/components";

export const Apple = () => {
  return (
    <main>
      <Title>About</Title>
      <Counter />
      <Counter />
      <p class="text-xl font-bold">
        Go back home{" "}
        <span class="text-blue-500 underline">
          <A href="/">Here</A>
        </span>
      </p>
    </main>
  );
};

export default Apple;
