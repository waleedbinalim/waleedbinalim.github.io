import { createSignal } from "solid-js";
// import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      class="increment text-white  bg-black shadow-lg"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
};
