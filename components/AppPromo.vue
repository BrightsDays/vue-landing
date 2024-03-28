<template>
  <div class="relative flex flex-col xl:flex-row items-center xl:mx-[-55px] mb-16 md:mb-[6.3rem] xl:mb-[3.7rem] pt-8 gap-12 z-10">
    <div class="flex flex-col items-center xl:items-start gap-6 md:gap-10">
      <h1 class="text-[2.5rem]/[47.4px] md:text-6xl text-white text-center xl:text-left font-bold">Complete 
        <span class="text-[#0BD88F]">Vue.js training</span> solutions for companies</h1>
      <p class="text-base md:text-[22px]/[30px] text-white text-center xl:text-left font-normal">
        Training solutions designed for companies, agencies and organisations with 
        developers using or who are considering using the Vue.js framework</p>
      <UiButton>Talk to Sales</UiButton>
    </div>
    <img :src=learners alt="group of learners" class="md:min-w-[38rem]"/>
  </div>
</template>

<script setup lang="ts">
import learners from '../assets/images/learners.svg'
</script>