import { useContext } from "solid-js";
import { Motion } from "@motionone/solid";
import { useCounter } from "~/contexts";

export const Counter = () => {
  const [count, { increment }] = useCounter();
  return (
    <>
      <Motion.button
        animate={{ opacity: [0, 1], x: [-100, 0] }}
        transition={{ duration: 0.5, easing: "ease-in-out" }}
        class="rounded-md bg-blue-100 px-3 py-1 text-gray-400  shadow-lg"
        onClick={increment}
      >
        Clicks: {count}
      </Motion.button>
    </>
  );
};


/*
import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}



*/