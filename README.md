
# 🌱 Plant Assistant Monorepo

A layered Nuxt 3 monorepo for a Plant Assistant app, featuring auto-imported composables, shared UI components, and clean separation of concerns.

---

## 📂 Repo Structure

```

/
├─ packages/
│  ├─ core/           # 🧩 Business logic & stores
│  ├─ ui/             # 🎨 Shared UI components & styling
│  └─ layer-base/     # 🛠️ Combines core + ui + global config
├─ apps/
│  └─ web/            # 🌐 Web application 🖥️
├─ LICENSE
└─ README.md

````

---

## ⚙️ Layers Explained

1. **core**  
   - Composables, stores, and runtime config  
   - Auto-imports everything under `core/src/composables` & `core/src/stores`

2. **ui**  
   - Vue components, UnoCSS, icons, fonts  
   - Auto-registers `ui/src/components`

3. **layer-base**  
   - Extends both **core** & **ui** Nuxt configs  
   - Adds global aliases (`#core`, `#ui`, `#layer`)  
   - Auto-imports `consola` and any extra layer-specific composables  
   - Sets up auto-import plugin for global consola usage  

4. **apps/web**  
   - Extends **layer-base**  
   - Your actual web app pages & layouts  

---

## 🔌 Auto-Importing Composables

Thanks to Nuxt’s `imports` feature + `unplugin-auto-import`:

```ts
// packages/core/src/composables/helloWorld.ts
export function useFoo() {
  return useState('foo', () => 'bar')
}
````

In your page, no import needed:

```vue
<script setup lang="ts">
const foo = useFoo()    // ← magically available!
console.log('foo', foo)
</script>
```

---

## 🔗 Aliases

You can import from any layer using neat aliases:

```ts
import { useFoo } from '#core/composables/helloWorld'
import { MyButton } from '#ui/components/MyButton.vue'
import { useLayerThing } from '#layer/composables/…'
```

---

## 🚀 Getting Started

```bash
pnpm install
pnpm prepare       # generate Nuxt types in all layers
pnpm dev:web       # start your web app
```

---

Made with Love ❤️ by [LaFllamme](https://github.com/lafllamme)
