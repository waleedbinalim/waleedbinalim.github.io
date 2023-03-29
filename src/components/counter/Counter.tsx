import { createSignal } from "solid-js";

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="increment bg-black  text-white shadow-lg"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
};
