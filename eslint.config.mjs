// eslint.config.mjs  ── stays JS even in a TS repo
import antfu from '@antfu/eslint-config'

export default antfu({
  // everything below is optional – antfu auto‑detects Vue & TS
  vue: true, // enable Vue support
  typescript: true, // enable TS rules
  unocss: true, // enable UnoCSS linting
  stylistic: {
    indent: 2, // 2 spaces
    singleQuote: true, // single quotes
    trailingComma: 'all', // trailing commas
  },
  json: true,
  yaml: true,

  /* enable eslint‑plugin‑format so ESLint does all formatting duties
         (replaces the Prettier bridge you didn’t want) */
  formatters: true,

  // tiny stylistic tweak, feel free to drop or extend
})
