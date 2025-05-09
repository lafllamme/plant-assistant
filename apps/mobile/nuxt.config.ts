// apps/web/nuxt.config.ts
import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  extends: [
    // relative path from apps/web → packages/layer-base
    resolve(__dirname, '../../packages/layer-base'),
  ],
  // Mobile app-specific config
  ssr: false,
  ionic: {
    // override defaults here if you like:
    // integrations: { meta: false },
    // css: { utilities: true },
    // config: { mode: 'md' }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // ─── (optional) any app-specific overrides ───────────────────────────────
  alias: {
    '#mobile': resolve(__dirname, './'),
  },

  // ─── page-specific auto-import dirs here if needed ────
  // imports: { dirs: [...] },

  // ─── app-only modules (e.g., analytics) can go here ───────────────
  modules: [
    // '@nuxt/module'
    '@nuxtjs/ionic',
  ],
})