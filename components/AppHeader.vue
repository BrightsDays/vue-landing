<template>
  <div class="flex justify-start items-center gap-6 px-4 md:px-2 py-5">
    <button>
      <img :src=burger />
    </button>
    <img :src=logo />
    <div class="ml-auto hidden md:flex items-center gap-[30px]">
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
</script>