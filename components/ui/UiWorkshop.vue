<template>
  <div class="min-w-[345px] md:min-w-[570px]">
    <div class="flex gap-3 bg-gradient-to-r from-[#4F08E680] to-[#FF497580] px-4 py-6 rounded-t-[30px]">
      <img :src="date" alt="Date" />
      <span class="text-base text-white font-medium">December 14th - 11:00 AM (GMT-3)</span>
    </div>
    <div class="flex flex-col gap-5 bg-[#2B2F44E5] px-4 py-9 rounded-b-[30px]">
      <div class="flex gap-9">
        <div class="flex gap-2 items-center">
          <img :src="video" alt="Video" />
          <span class="text-sm text-[#737B98] whitespace-nowrap">LIVE Training</span>
        </div>
        <div class="flex gap-2 items-center">
          <img :src="time" alt="Time" />
          <span class="text-sm text-[#737B98] whitespace-nowrap">15 Hours</span>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-2xl text-white font-medium">Vue.js Fundamentals</span>
        <span class="text-sm text-[#737B98]">
          A progressive framework for building user interfaces. Unlike other monolithic 
          frameworks, Vue is designed from the ground up to be incrementally...
        </span>
      </div>
      <div class="flex gap-2 items-center">
        <img :src="avatar" alt="Avatar" class="rounded-full" />
        <span class="text-sm text-[#737B98]">Steve Popoola</span>
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