import { A } from "@solidjs/router";
import { Component, For, createSignal, Show } from "solid-js";
import { navRoutes } from "~/constants";

export const Navbar: Component = () => {
  const [openHamburger, setOpenHamburder] = createSignal<boolean>(false);

  return (
    <nav class="bg-black">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none "
              classList={{ "bg-gray-700": openHamburger() }}
              onClick={() => setOpenHamburder(!openHamburger())}
            >
              <div class="w-100 flex flex-col justify-center align-middle">
                <For each={[...Array(3)]}>
                  {() => <span class="mb-1 h-1 w-8 bg-white" />}
                </For>
              </div>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center text-white">
              Logo Here?
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <For each={navRoutes}>
                  {(route) => (
                    <A
                      href={route.href}
                      class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                      activeClass="underline decoration-white decoration-2 underline-offset-2"
                      end
                    >
                      {route.name}
                    </A>
                  )}
                </For>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Show when={openHamburger()}>
        <div class="sm:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <For each={navRoutes}>
              {(route) => (
                <A
                  href={route.href}
                  class="block rounded-md px-3 py-2 text-base font-medium text-white"
                  aria-current="page"
                >
                  {route.name}
                </A>
              )}
            </For>
          </div>
        </div>
      </Show>
    </nav>
  );
};
