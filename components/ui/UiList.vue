<template>
  <div class="flex flex-col items-center md:items-start gap-5 xl:min-w-[16.8rem]">
    <span class="text-xl text-grey_light font-medium uppercase">
      {{ title }}
    </span>
    <div class="flex flex-col gap-3.5 items-center md:items-start">
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