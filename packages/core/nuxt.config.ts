// packages/core/nuxt.config.ts
import * as process from 'node:process'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // ① point #core at your new `src/`
  alias: {
    '#core': resolve('./src')
  },

  // ② register Pinia
  modules: ['@pinia/nuxt'],

  // ③ auto-import everything in your src/ folders
  imports: {
    dirs: [
      'src/ai',
      'src/stores',
      'src/composables',
    ]
  },

  // ④ (uncomment once you move your plugin into src/plugins)
  // plugins: ['~/plugins/cloudflare-ai.server.ts'],

  // ⑤ your runtime config for Ollama / Cloudflare
  runtimeConfig: {
    cloudflareApiKey: process.env.CLOUDFLARE_API_KEY,
    public: {
      cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    }
  }
})
