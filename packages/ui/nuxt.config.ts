import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  // expose UI package under the alias "#ui"
  alias: { '#ui': resolve('./src') },

  // auto-register everything in components folder
  components: [
    { path: 'src/components', pathPrefix: false },
  ],

  // UnoCSS + icons
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@unocss/nuxt',
  ],

  // @ts-expect-error We need to add this to the config
  // TODO: is this necessary?
  unocss: {
    nuxtLayers: true,
  },
})
