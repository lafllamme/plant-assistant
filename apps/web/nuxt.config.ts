// apps/web/nuxt.config.ts
import {resolve} from 'pathe'
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    // ─── Pull in everything from your layer-base package ──────────────────────
    extends: [
        // relative path from apps/web → packages/layer-base
        resolve(__dirname, '../../packages/layer-base')
    ],
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},

    // ─── (optional) any web-specific overrides ───────────────────────────────
    alias: {
        // e.g., expose a #web alias if you like
        '#web': resolve(__dirname, './'),
    },

    // ─── You can still add page-specific auto-import dirs here if needed ────
    // imports: { dirs: [...] },

    // ─── And any web-only modules (e.g. analytics) can go here ───────────────
    modules: [
        // '@nuxtjs/your-web-only-module'
    ]
})
