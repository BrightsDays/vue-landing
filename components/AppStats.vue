<template>
  <div class="flex flex-col mb-[120px]">
    <span class="inline-block mb-[13px] bg-gradient-to-r from-[#0BD88F] to-[#00F0FF] bg-clip-text text-base text-transparent text-center font-medium uppercase">
      YOUR #1 SOURCE OF VUE.JS COURSES
    </span>
    <UiHeading
      main="Full Stack"
      green="Vue Training"
      second="Solutions"
    />
    <div class="flex justify-between">
      <div
        v-for="item of stats"
        :key="`stat_${item.title}`"
        class="flex flex-col items-center"
      >
        <span
          class="bg-gradient-to-r from-[#0BD88F] to-[#00F0FF] bg-clip-text text-transparent text-[64px]/[75.84px] font-normal"
        >
          {{ item.value }}
        </span>
        <div class="flex gap-2.5">
          <img :src=item.icon :alt=item.title />
          <span class="text-sm text-white">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import video from '../assets/images/video.svg'
import course from '../assets/images/course.svg'
import time from '../assets/images/time.svg'

const stats = [
  {
    title: 'Video lessons',
    value: 763,
    icon: video
  },
  {
    title: 'Courses',
    value: 40,
    icon: course
  },
  {
    title: '15 Hours',
    value: 64,
    icon: time
  },
]
</script>