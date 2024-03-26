<template>
  <div class="flex justify-start items-center gap-6 px-6 py-5">
    <button>
      <img :src=burger />
    </button>
    <img :src=logo />
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/vue_school.svg'
import burger from '../assets/images/burger_menu.svg'
</script>