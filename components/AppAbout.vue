<template>
  <div class="mb-[120px] md:mb-[140px]">
    <UiCard>
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img :src=logo alt="logo" class="md:min-w-28 md:px-5 md:py-4"/>
        <div class="flex flex-col gap-[15px]">
          <span class="text-2xl md:text-[40px]/[47.4px] md:font-bold text-white text-center md:text-left">About Vue School corporate training</span>
          <p class="text-sm md:text-[22px/30px] text-white text-center md:text-left">
            School is the #1 training resource for Vue.js and has provided the most 
            comprehensive Vue.js video library in the world to over 140,000 developers. 
            Private individuals and small to enterprise companies have used our services 
            to develop their skills since 2016.
          </p>
        </div>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/logo.svg'
</script>