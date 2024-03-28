<template>
  <h2 class="mb-8 font-bold text-4xl md:text-6xl text-white text-center">
    {{ main }}
    <span class="bg-gradient-to-r from-green to-green_gradient_light bg-clip-text text-transparent">
      {{ green }}
    </span> 
    {{ second }}
  </h2>
</template>

<script setup lang="ts">
const {
  main,
  green,
  second
} = defineProps<{
  main: string
  green?: string
  second?: string
}>()
</script>