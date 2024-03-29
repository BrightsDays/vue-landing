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
        v-for="item, index in bundles"
        :key="`bundle_${item.title}_${index}`"
        :icon="item.icon"
        :title="item.title"
        :access="item.access"
        :access-number="item.access_number"
        :watch="item.watch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import leaf from '../assets/images/bundles/leaf.svg'
import rocket from '../assets/images/bundles/rocket.svg'
import bolt from '../assets/images/bundles/bolt.svg'

// const sanity = useSanity()

// const query = groq`{ "accesses": *[_type == "accesses"]{ 
//   basic,
//   professional,
//   basic_second
// } }`

// const { data } = await useAsyncData('accesses', () => sanity.fetch(query))

// const basic = data.value['accesses'][0].basic
// const professional = data.value['accesses'][0].professional
// const basic_second = data.value['accesses'][0].basic_second

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
    access_number: 3,
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
    access_number: 5,
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
    access_number: 5,
    watch: false
  }
]
</script>