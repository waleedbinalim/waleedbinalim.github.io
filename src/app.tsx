// @refresh reload
import { Suspense, onMount } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Title, Link, Meta } from "@solidjs/meta";
import { CounterProvider } from "./contexts";
import { NavLayout } from "./layouts";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app.css";

export default function Root() {
  onMount(() => AOS.init());
  return (
    <>
      <Router
        root={props => (
          <MetaProvider>
            <Title>Waleed Bin Alim</Title>
            <Meta charset="utf-8" />
            <Link rel="icon" href="/favicon.ico?" />
            <Meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <a href="/">Index</a>
            <a href="/about">About</a> */}


            <Suspense>{props.children}</Suspense>

          </MetaProvider>
        )}
      >
        <CounterProvider>
          <NavLayout>
            <FileRoutes />
          </NavLayout>
        </CounterProvider>
      </Router>
    </>
  );
}


/*
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}


*/