<template>
  <div class="relative mb-[7.5rem] md:mb-[8.75rem] xl:mb-[11.25rem] z-10">
    <UiCard>
      <div class="flex flex-col md:flex-row items-center md:items-start xl:items-center gap-6">
        <div class="md:px-5 xl:pl-20 xl:pr-16 md:py-4 xl:py-12">
        <img :src=logo alt="logo" class="md:min-w-28 xl:min-w-[8.5rem]"/>
        </div>
        <div class="flex flex-col gap-3.5 xl:gap-8">
          <span class="text-2xl md:text-[2.5rem]/[2.9rem] md:font-bold text-white text-center md:text-left">About Vue School corporate training</span>
          <p class="text-sm md:text-xl text-white text-center md:text-left">
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
        v-for="item, index of partners"
        :key="`partner_${item.title}_${index}`"
        :href="item.url"
        class="px-6 py-2.5"
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