<template>
  <div class="flex flex-col xl:flex-row mb-[7.5rem] md:mb-[8.75rem] xl:mb-[12.5rem] md:px-14 xl:px-0 xl:justify-between">
    <div class="flex flex-col gap-3">
      <span class="inline-block bg-gradient-to-r from-green to-green_gradient_light bg-clip-text text-base md:text-2xl text-transparent text-center xl:text-left font-medium uppercase">
        YOUR #1 SOURCE OF VUE.JS COURSES
      </span>
      <UiHeading
        main="Full Stack"
        green="Vue Training"
        second="Solutions"
        class="xl:text-left xl:max-w-[35.6rem]"
      />
    </div>
    <div class="flex justify-around xl:gap-12">
      <div
        v-for="item of stats"
        :key="`stat_${item.title}`"
        class="flex flex-col items-center whitespace-nowrap"
      >
        <span
          class="bg-gradient-to-r from-green to-green_gradient_light bg-clip-text text-transparent text-6xl md:text-8xl md:font-medium"
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

const sanity = useSanity()

const query = groq`{ "stats": *[_type == "stats"]{ 
  lessons,
  courses,
  hours 
} }`

const { data } = await useAsyncData('stats', () => sanity.fetch(query))

const lessons = data.value['stats'][0].lessons || 0
const courses = data.value['stats'][0].courses || 0
const hours = data.value['stats'][0].hours || 0

const stats = [
  {
    title: 'Video lessons',
    value: lessons,
    icon: video
  },
  {
    title: 'Courses',
    value: courses,
    icon: course
  },
  {
    title: '15 Hours',
    value: hours,
    icon: time
  },
]
</script>