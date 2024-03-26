<template>
  <h2 class="mb-8 font-bold text-[2.5rem]/[47.4px] text-white text-center">
    {{ main }}
    <span class="bg-gradient-to-r from-[#0BD88F] to-[#00F0FF] bg-clip-text text-transparent">
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