<template>
  <div class="bg-gradient-to-b from-grey_grad_from to-grey_grad_to rounded-3xl p-px h-max">
    <div :class="`flex flex-col items-${items || 'center'} bg-grey_opacity rounded-3xl p-6 md:p-10 gap-6`">
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