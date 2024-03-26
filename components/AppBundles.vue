<template>
  <div class="px-[15px] pb-[120px]">
    <UiHeading
      main="Discounted"
      green="Corporate Training"
      second="Bundles"
    />
    <div class="flex flex-col gap-6">
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
    watch: false
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