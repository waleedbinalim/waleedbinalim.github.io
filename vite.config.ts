import solid from "solid-start/vite";
import solidSvg from "vite-plugin-solid-svg";
import { defineConfig } from "vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  // base: "/solid-js-practice/",
  base: "/",
  plugins: [solid({ adapter: staticAdapter() }), solidSvg()],
});
