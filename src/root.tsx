// @refresh reload
import { Suspense, onMount } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { CounterProvider } from "./contexts";
import { NavLayout } from "./layouts";
import "./root.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Root() {
  onMount(() => AOS.init());
  return (
    <Html lang="en">
      <Head>
        <Title>Waleed Bin Alim</Title>
        <Meta charset="utf-8" />
        <Link rel="icon" href="/favicon.ico?" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <CounterProvider>
          <Suspense>
            <ErrorBoundary>
              <NavLayout>
                <Routes>
                  <FileRoutes />
                </Routes>
              </NavLayout>
            </ErrorBoundary>
          </Suspense>
        </CounterProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
