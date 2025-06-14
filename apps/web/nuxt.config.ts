// apps/web/nuxt.config.ts
import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // ─── Pull in everything from your layer-base package ──────────────────────
  extends: [
    // relative path from apps/web → packages/layer-base
    resolve(__dirname, '../../packages/layer-base'),
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // ─── (optional) any app-specific overrides ───────────────────────────────
  alias: {
    '#web': resolve(__dirname, './'),
  },

  // ─── page-specific auto-import dirs here if needed ────
  // imports: { dirs: [...] },

  // ─── app-only modules (e.g., analytics) can go here ───────────────
  modules: [
    // '@nuxt/module'
  ],
})
