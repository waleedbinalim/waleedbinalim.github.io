/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, createSignal, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CounterContext = createContext<any>([
  { count: 0 },
  {
    // increment: () => {},
    // decrement: () => {},
  },
]);

export function CounterProvider(props: any) {
  const [count, setCount] = createSignal(props.count || 0);

  const counter = [
    count,

    {
      increment: () => setCount(count() + 1),
      decrement: () => setCount(count() - 1),
    },
  ];

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  return useContext(CounterContext);
};
