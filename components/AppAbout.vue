<template>
  <div class="mb-[120px] md:mb-[140px] xl:mb-[180px]">
    <UiCard>
      <div class="flex flex-col md:flex-row items-center md:items-start xl:items-center gap-6">
        <div class="md:px-5 xl:pl-20 xl:pr-16 md:py-4 xl:py-12">
        <img :src=logo alt="logo" class="md:min-w-28 xl:min-w-[135px]"/>
        </div>
        <div class="flex flex-col gap-[15px] xl:gap-8">
          <span class="text-2xl md:text-[40px]/[47.4px] md:font-bold text-white text-center md:text-left">About Vue School corporate training</span>
          <p class="text-sm xl:text-[22px]/[30px] md:text-[22px/30px] text-white text-center md:text-left">
            School is the #1 training resource for Vue.js and has provided the most 
            comprehensive Vue.js video library in the world to over 140,000 developers. 
            Private individuals and small to enterprise companies have used our services 
            to develop their skills since 2016.
          </p>
        </div>
      </div>
    </UiCard>
    <div class="hidden xl:flex justify-between mt-16">
      <a
        v-for="item, key of partners"
        :key="`partner_${item.title}_${key}`"
        :href="item.url"
        class="px-[1.4rem] py-2.5"
      >
        <img :src="item.logo" :alt="item.title" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/logo.svg'
import google from '../assets/images/partners/google.svg'

const partners = [
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
  {
    title: 'Google',
    logo: google,
    url: '/'
  },
]
</script>