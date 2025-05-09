<script lang="ts" setup>
// ← this comes for free via auto-import!
const foo = useFoo()

consola.log('foo', foo)
</script>

<template>
  <div>
    <h1>🌱 Plant Assistant Web</h1>
    <p>{{ foo }}</p>
  </div>
</template>
