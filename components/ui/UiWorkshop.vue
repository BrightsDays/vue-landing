<template>
  <div class="min-w-[21.5rem] md:min-w-[35.6rem]">
    <div class="flex gap-3 bg-gradient-to-r from-blue to-purple px-4 py-6 rounded-t-3xl">
      <img :src="date" alt="Date" />
      <span class="text-base text-white font-medium">December 14th - 11:00 AM (GMT-3)</span>
    </div>
    <div class="flex flex-col gap-5 bg-grey_opacity px-4 py-9 rounded-b-3xl">
      <div class="flex gap-9">
        <div class="flex gap-2 items-center">
          <img :src="video" alt="Video" />
          <span class="text-sm text-grey_light whitespace-nowrap">LIVE Training</span>
        </div>
        <div class="flex gap-2 items-center">
          <img :src="time" alt="Time" />
          <span class="text-sm text-grey_light whitespace-nowrap">15 Hours</span>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-2xl text-white font-medium">Vue.js Fundamentals</span>
        <span class="text-sm text-grey_light">
          A progressive framework for building user interfaces. Unlike other monolithic 
          frameworks, Vue is designed from the ground up to be incrementally...
        </span>
      </div>
      <div class="flex gap-2 items-center">
        <img :src="avatar" alt="Avatar" class="rounded-full" />
        <span class="text-sm text-grey_light">Steve Popoola</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import date from '../../assets/images/date.svg'
import time from '../../assets/images/time.svg'
import video from '../../assets/images/video.svg'
import avatar from '../../assets/images/avatar.jpg'
</script>