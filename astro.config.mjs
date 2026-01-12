// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Plus Jakarta Sans",
        cssVariable: "--font-jakarta",
        weights: [400, 500, 600, 700],
      },
    ],
  },
});
