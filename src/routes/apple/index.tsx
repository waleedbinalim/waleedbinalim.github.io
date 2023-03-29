import { A } from "@solidjs/router";
import { Title } from "solid-start";
import { Counter } from "~/components";

export const Apple = () => {
  return (
    <main>
      <Title>Apple</Title>
      <h1>Apple</h1>
      <Counter />
      <p>
        Go back to home <A href="/">here</A>
      </p>
    </main>
  );
};

export default Apple;
