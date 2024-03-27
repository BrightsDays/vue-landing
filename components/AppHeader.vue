<template>
  <div class="flex justify-start md:justify-between items-center px-4 md:px-2 xl:px-0 xl:mx-[-87px] py-5">
    <div class="flex items-center gap-6">
      <button class="xl:hidden">
        <img :src=burger />
      </button>
      <img :src=logo />
    </div>
    <div class="hidden xl:flex gap-5">
      <a
        v-for="item of menu"
        :key="`menu_${item.text}`"
        :href="item.url"
        class="flex gap-0 text-base text-white font-normal"
      >
        {{ item.text }}
        <img v-if="item.submenu" :src="arrow" alt="Arrow" />
      </a>
    </div>
    <div class="hidden md:flex items-center gap-[30px]">
      <a href="/" class="text-base text-white font-normal">
        Log in
      </a>
      <UiButton transparent>
        Sign up
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/vue_school.svg'
import burger from '../assets/images/burger_menu.svg'
import arrow from '../assets/images/arrow.svg'

const menu = [
  {
    text: 'Courses',
    url: '/',
    submenu: true
  },
  {
    text: 'Plans',
    url: '/',
    submenu: false
  },
  {
    text: 'Business Service',
    url: '/',
    submenu: true
  },
  {
    text: 'Learning Paths',
    url: '/',
    submenu: false
  },
  {
    text: 'Hiring',
    url: '/',
    submenu: false
  },
  {
    text: 'Articles',
    url: '/',
    submenu: false
  },
  {
    text: 'Events',
    url: '/',
    submenu: true
  },
  {
    text: 'Get Certified',
    url: '/',
    submenu: false
  }
]
</script>