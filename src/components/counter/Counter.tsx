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
