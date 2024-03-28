<template>
  <div class="flex flex-col xl:flex-row mb-[120px] md:mb-[140px] xl:mb-[200px] md:px-[3.75rem] xl:px-0">
    <div class="flex flex-col gap-[13px]">
      <span class="inline-block bg-gradient-to-r from-[#0BD88F] to-[#00F0FF] bg-clip-text text-base md:text-2xl text-transparent text-center xl:text-left font-medium uppercase">
        YOUR #1 SOURCE OF VUE.JS COURSES
      </span>
      <UiHeading
        main="Full Stack"
        green="Vue Training"
        second="Solutions"
        class="xl:text-left"
      />
    </div>
    <div class="flex justify-around xl:gap-12">
      <div
        v-for="item of stats"
        :key="`stat_${item.title}`"
        class="flex flex-col items-center"
      >
        <span
          class="bg-gradient-to-r from-[#0BD88F] to-[#00F0FF] bg-clip-text text-transparent text-[64px]/[75.84px] md:text-8xl md:font-medium"
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