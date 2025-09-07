import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import { PageRoutes } from "~/enums";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />

      <div class="w-100 flex h-screen flex-col items-center justify-center p-2">
        <div>
          <h1 class="text-3xl font-bold ">What are yooooou doing here?</h1>
          <p>This ain't the page you looking for, runnn</p>
          <p>
            Go back home <span class="text-2xl">👉</span>
            <A class=" text-lg text-blue-400 underline" href={PageRoutes.Home}>
              Here
            </A>
          </p>
        </div>
      </div>
    </main>
  );
}
