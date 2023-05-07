import { children, Component, JSX } from "solid-js";
// import { Navbar } from "~/components";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const NavLayout: Component<Props> = (props) => {
  const c = children(() => props.children);

  return (
    <>
      {/* <Navbar /> */}
      {c()}
    </>
  );
};
