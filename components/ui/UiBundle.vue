<template>
  <UiCard items="start">
    <div class="flex gap-6 mb-8">
      <img :src=icon :alt=title />
      <h3 class="text-[22px] text-white font-bold">{{ title }}</h3>
    </div>
    <span class="text-base text-[#0BD88F] font-normal mb-6">Includes 1 year access to:</span>
    <div class="flex flex-col gap-4">
      <div
        v-for="item in access"
        :key="`access_${item.content}`"
        :class="`${!item.value ? 'opacity-20 ' : ''}flex gap-4`"
      >
        <img :src="item.value ? ok : bad" alt="Status" />
        <span class="text-sm text-white">{{ item.content }}</span>
        <img v-if="item.value" :src="info" alt="Info" class="ml-auto" />
      </div>
    </div>
    <UiRange />
    <UiButton>Start Learning</UiButton>
    <a class="inline-block text-base text-[#0BD88F] font-medium mx-auto" href="/">Refer your manager</a>
  </UiCard>
</template>

<script setup lang="ts">
import ok from '../../assets/images/bundles/status_ok.svg'
import bad from '../../assets/images/bundles/status_false.svg'
import info from '../../assets/images/bundles/info.svg'

const {
  icon,
  title,
  access,
  watch
} = defineProps<{
  icon: string
  title: string
  access: {
    content: string
    value: boolean
  }[]
  watch?: boolean
}>()
</script>