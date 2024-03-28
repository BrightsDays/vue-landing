<template>
  <div class="relative mb-[7.5rem] md:mb-[8.75rem] xl:mb-[10rem] xl:mx-[-8.4rem] z-10">
    <UiHeading
      main="Discounted"
      green="Corporate Training"
      second="Bundles"
      class="md:mb-[4.4rem] xl:mx-auto xl:mb-28 xl:max-w-[46.8rem]"
    />
    <div class="flex flex-col xl:flex-row gap-6 md:px-6 xl:px-0 justify-center">
      <UiBundle
        v-for="item, key in bundles"
        :key="`bundle_${item.title}_${key}`"
        :icon="item.icon"
        :title="item.title"
        :access="item.access"
        :watch="item.watch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import leaf from '../assets/images/bundles/leaf.svg'
import rocket from '../assets/images/bundles/rocket.svg'
import bolt from '../assets/images/bundles/bolt.svg'

const bundles = [
  {
    icon: leaf,
    title: 'Basic',
    access: [
      {
        content: 'All Video Courses',
        value: true
      },
      {
        content: 'Vue.Js Master class',
        value: true
      },
      {
        content: 'Developer assist Slack channel',
        value: true
      },
      {
        content: 'Live Weekly QnA',
        value: false
      },
      {
        content: '1 x ws ticket per license',
        value: false
      }
    ],
    watch: false
  },
  {
    icon: rocket,
    title: 'Professional',
    access: [
      {
        content: 'All Video Courses',
        value: true
      },
      {
        content: 'Vue.Js Master class',
        value: true
      },
      {
        content: 'Developer assist Slack channel',
        value: true
      },
      {
        content: 'Live Weekly QnA',
        value: true
      },
      {
        content: '1 x ws ticket per license',
        value: true
      }
    ],
    watch: true
  },
  {
    icon: bolt,
    title: 'Basic',
    access: [
      {
        content: 'All Video Courses',
        value: true
      },
      {
        content: 'Vue.Js Master class',
        value: true
      },
      {
        content: 'Developer assist Slack channel',
        value: true
      },
      {
        content: 'Live Weekly QnA',
        value: false
      },
      {
        content: '1 x ws ticket per license',
        value: false
      }
    ],
    watch: false
  }
]
</script>