<template>
  <h1 class="text-4xl font-semibold p-4 text-gray-300">{{ msg }}</h1>
  <div class="card p-8 mt-4">
    <h2 class="text-4xl font-semibold p-4 text-white">{{ count }}</h2>
    <div class="flex flex-row">
      <button class="btn" @click="decrement">Decrement</button>
      <button class="btn" @click="increment">Increment</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue"

defineProps({
  msg: String
})

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value > 0 && count.value--
</script>
<style scoped>
.btn {
  @apply bg-yellow-400 text-yellow-900 font-bold shadow-lg px-5 py-2 mx-2 rounded-md mt-4 focus:outline-none focus:ring-1 focus:ring-yellow-400;
}
.card {
  @apply bg-gray-800 shadow-lg rounded-md flex flex-col justify-center items-center;
}
</style>
