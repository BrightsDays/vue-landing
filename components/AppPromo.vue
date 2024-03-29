<template>
  <div class="relative flex flex-col xl:flex-row items-center xl:mx-[-3.4rem] mb-16 md:mb-24 xl:mb-14 pt-8 gap-12 z-10">
    <div class="flex flex-col items-center xl:items-start gap-6 md:gap-10">
      <h1 class="text-4xl md:text-6xl text-white text-center xl:text-left font-bold">{{ before }} 
        <span class="text-green">{{ marked }}</span> {{ after}}</h1>
      <p class="text-base md:text-xl text-white text-center xl:text-left font-normal">
        {{ content }}
      </p>
      <UiButton>{{ action }}</UiButton>
    </div>
    <img :src=learners alt="group of learners" class="md:min-w-[38rem]"/>
  </div>
</template>

<script setup lang="ts">
import learners from '../assets/images/learners.svg'

const sanity = useSanity()

const query = groq`{ "siteSettings": *[_type == "siteSettings"]{ 
  heading_before,
  heading_marked,
  heading_after,
  paragraph,
  call_to_action  
} }`

const { data } = await useAsyncData('siteSettings', () => sanity.fetch(query))
const {
  heading_before,
  heading_marked,
  heading_after,
  paragraph,
  call_to_action 
} = data.value['siteSettings'][0]

const before = heading_before
const marked = heading_marked
const after = heading_after
const content = paragraph
const action = call_to_action
</script>