import { resolve } from "path";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    AutoImport({
      include: [
        /\.[tj]s?$/,
        /\.svelte$/,
      ],
      imports: ["svelte"],
    }),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        })
      ],
    }),
  ],
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
      "~/components/": `${resolve(__dirname, "src/components")}/`,
      "~/features/": `${resolve(__dirname, "src/features")}/`,
      "~/utils/": `${resolve(__dirname, "src/utils")}/`,
    },
  },
})
