<template>
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-8 items-center">
      <img :src="logo" alt="Logo" />
      <span class="text-base text-white text-center">
        Thanks to fine people like you, Vue School can proudly sponsor Evan and the 
        future of Vue.js by being a Platinum Patreon
      </span>
      <div class="flex flex-col gap-6 flex-shrink w-full items-center">
        <span class="text-[22px] text-[#737B98] font-medium uppercase">FOLLOW US IN SOCIAL MEDIA</span>
        <div class="flex justify-between w-full max-w-[470px]">
          <a
            v-for="item in socials"
            :key="`social_${item.title}`"
            :href="item.url"
            class="flex justify-center items-center w-14 h-14 bg-[#2B2F44] rounded-full"
          >
            <img :src="item.icon" :alt="item.title" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8">
      <UiList
        v-for="item of links"
        :key="`list_${item.title}`"
        :title="item.title"
        :list="item.list"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/images/logo_big.svg'
import facebook from '../assets/images/social/facebook.svg'
import twitter from '../assets/images/social/twitter.svg'
import linkedin from '../assets/images/social/linkedin.svg'
import github from '../assets/images/social/github.svg'
import youtube from '../assets/images/social/youtube.svg'

const socials = [
  {
    title: 'Facebook',
    icon: facebook,
    url: '/'
  },
  {
    title: 'Twitter',
    icon: twitter,
    url: '/'
  },
  {
    title: 'GitHub',
    icon: github,
    url: '/'
  },
  {
    title: 'LinkedIn',
    icon: linkedin,
    url: '/'
  },
  {
    title: 'YouTube',
    icon: youtube,
    url: '/'
  },
]

const links = [
  {
    title: 'Products',
    list: [
      {
        text: 'Courses',
        url: '/'
      },
      {
        text: 'Workshops',
        url: '/'
      },
      {
        text: 'Vue MAsterclass',
        url: '/'
      },
      {
        text: 'Mastering Nuxt',
        url: '/'
      },
    ]
  },
  {
    title: 'Corporate',
    list: [
      {
        text: 'Corporate Training',
        url: '/'
      },
      {
        text: 'Developer Recruitment',
        url: '/'
      },
      {
        text: 'Course Development',
        url: '/'
      },
      {
        text: 'Consulting',
        url: '/'
      },
      {
        text: 'On-site Workshops',
        url: '/'
      },
      {
        text: 'Affiliate Programs',
        url: '/'
      },
    ]
  },
  {
    title: 'CONNECT WITH US',
    list: [
      {
        text: 'About Us',
        url: '/'
      },
      {
        text: 'Careers',
        url: '/'
      },
      {
        text: 'Contact Us',
        url: '/'
      }
    ]
  },
  {
    title: 'EVENTS',
    list: [
      {
        text: 'Vue.js Nation',
        url: '/'
      },
      {
        text: 'Nuxt Nation',
        url: '/'
      },
      {
        text: 'Vue.js Forge',
        url: '/'
      }
    ]
  },
  {
    title: 'RESOURCES',
    list: [
      {
        text: 'Articles',
        url: '/'
      }
    ]
  },
  {
    title: 'PRICING',
    list: [
      {
        text: 'Plans',
        url: '/'
      }
    ]
  }
]
</script>