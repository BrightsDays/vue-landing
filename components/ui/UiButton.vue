<template>
  <button
    v-if="!transparent"
    class="bg-green rounded-basic px-10 py-5 text-base text-black font-medium  hover:opacity-80 transition-all"
  >
    <slot />
  </button>
  <div
    v-else
    class="bg-gradient-to-r from-green to-green_gradient p-0.5 rounded-outer"
  >
    <button
      class="bg-main rounded-basic px-10 py-5 text-base text-green font-medium hover:opacity-80 transition-all"
    >
    <slot />
  </button>
  </div>
</template>

<script setup lang="ts">
const {
  transparent
} = defineProps<{
  transparent?: boolean
}>()
</script>