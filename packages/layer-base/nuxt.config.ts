// packages/layer-base/nuxt.config.ts
import { createResolver } from '@nuxt/kit'
import { defineNuxtConfig } from 'nuxt/config'
import AutoImport from 'unplugin-auto-import/vite'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // ─── Pick everything up from core & ui layers ───────────────────────────
  extends: [
    resolve('../core'),    // merges core’s nuxt.config.ts (pinia, runtimeConfig, imports, etc)
    resolve('../ui'),      // merges ui’s nuxt.config.ts (components, uno-css, image, icon, fonts, etc)
  ],

  // ─── alias the public façade ────────────────────────────────────────────
  alias: {
    '#layer': resolve('./'),
  },

  // ─── layer-specific auto-imports & globals ──────────────────────────────
  imports: {
    // only if you want to expose extra composables strictly in layer-base
    dirs: [
      // e.g. resolve('./src/some-layer-only/composables')
    ],
    presets: [
      // consola everywhere
      {
        from: 'consola',
        // [importName, aliasName] → import { default as consola } from 'consola'
        imports: [['default', 'consola']]
      }
    ]
  },

  // ─── layer-specific components (if you have any here) ───────────────────
  components: [
    // e.g. { path: resolve('./components'), pathPrefix: false }
  ],

  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            from: 'consola',
            // again, default export aliased to `consola`
            imports: [['default', 'consola']]
          }
        ],
        dts: 'auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      })
    ]
  },

  // ─── only modules truly shared by _every_ app go here ────────────────────
  modules: [
    // for example, if _all_ apps (web + mobile) really need Capacitor
    // '@nuxtjs/ionic'
  ],

  app: {
    head: { titleTemplate: '%s · Plant Assistant' }
  }
})
