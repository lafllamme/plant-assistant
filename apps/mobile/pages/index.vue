<script lang="ts" setup>
// ← this comes for free via auto-import!
const foo = useFoo()

consola.log('foo', foo)
</script>
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mobile Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      Hello from Ionic + Nuxt! {{ foo }}
    </ion-content>
  </ion-page>
</template>
