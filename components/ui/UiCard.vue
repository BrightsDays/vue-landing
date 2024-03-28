<template>
  <div class="bg-gradient-to-b from-[#FFFFFF33] to-[#FFFFFF00] rounded-[30px] p-px h-max">
    <div :class="`flex flex-col items-${items || 'center'} bg-[#2B2F44E5] rounded-[30px] p-6 md:p-10 gap-6`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  items
} = defineProps<{
  items?: 'center' | 'start'
}>()
</script>