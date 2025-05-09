<template>
  <div>
    <h1>🌱 Plant Assistant Web</h1>
    <p>{{ foo }}</p>
  </div>
</template>

<script setup lang="ts">
// ← this comes for free via auto-import!
const foo = useFoo()

console.log('foo', foo)
</script>