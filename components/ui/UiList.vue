<template>
  <div class="flex flex-col gap-5 items-center">
    <span class="text-[22px] text-[#737B98] font-medium uppercase">
      {{ title }}
    </span>
    <div class="flex flex-col gap-3.5 items-center">
      <a
        v-for="item of list" 
        :key="`link_${item.text}`"
        :href="item.url"
        class="text-base text-white"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  title,
  list
} = defineProps<{
  title: string
  list: {
    text: string
    url: string
  }[]
}>()
</script>