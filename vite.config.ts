import solid from "solid-start/vite";
import solidSvg from "vite-plugin-solid-svg";
import { defineConfig } from "vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  base: "/waleedbinalim.github.io/",
  plugins: [solid({ adapter: staticAdapter() }), solidSvg()],
});
