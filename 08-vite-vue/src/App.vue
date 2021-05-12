<template>
  <div class="flex items-center flex-col justify-center h-screen">
    <img alt="Vue logo" src="./assets/logo.png" width="120" />
    <Button msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script setup>
import Button from "./components/Button.vue"
</script>

<style>
body {
  @apply bg-gray-900;
}
</style>
