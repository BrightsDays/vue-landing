<template>
  <div class="px-[15px] pt-8 mb-[120px]">
    <UiCard>
      <img :src=logo alt="logo" />
      <div class="flex flex-col gap-[15px]">
        <span class="text-2xl text-white text-center">About Vue School corporate training</span>
        <p class="text-sm text-white text-center">
          School is the #1 training resource for Vue.js and has provided the most 
          comprehensive Vue.js video library in the world to over 140,000 developers. 
          Private individuals and small to enterprise companies have used our services 
          to develop their skills since 2016.
        </p>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/logo.svg'
</script>