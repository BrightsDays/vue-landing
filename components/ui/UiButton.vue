<template>
  <button
    v-if="!transparent"
    class="bg-[#0BD88F] rounded-[10px] px-10 py-5 text-base text-black font-medium"
  >
    <slot />
  </button>
  <div
    v-else
    class="bg-gradient-to-r from-[#0BD88F] to-[#00C2FF] p-[1px] rounded-[10px]"
  >
    <button
      class="bg-[#212435] rounded-[10px] px-10 py-5 text-base text-[#0BD88F] font-medium"
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