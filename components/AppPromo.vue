<template>
  <div class="flex flex-col items-center mb-16 pt-8 gap-12">
    <div class="flex flex-col items-center gap-6 md:gap-10">
      <h1 class="text-[2.5rem]/[47.4px] md:text-6xl text-white text-center font-bold">Complete 
        <span class="text-[#0BD88F]">Vue.js training</span> solutions for companies</h1>
      <p class="text-base md:text-[22px]/[30px] text-white text-center font-normal">
        Training solutions designed for companies, agencies and organisations with 
        developers using or who are considering using the Vue.js framework</p>
      <UiButton>Talk to Sales</UiButton>
    </div>
    <img :src=learners alt="group of learners" class="md:w-[38rem]"/>
  </div>
</template>

<script setup lang="ts">
import learners from '../assets/images/learners.svg'
</script>