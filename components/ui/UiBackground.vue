<template>
  <div v-if="position === 'top'" class="relative w-full h-[950px] mt-[-200px] xl:mt-[-150px] mb-[-750px] xl:mb-[-800px] z-0">
    <div
      class="xl:hidden absolute bottom-[340px] w-full h-[610px] z-0 bg-no-repeat"
      :style="{'background-image': `url(${first_bottom_mobile});background-size:100%`}"
    />
    <div
      class="xl:hidden absolute bottom-0 w-full h-[918px] z-0 bg-no-repeat"
      :style="{'background-image': `url(${first_top_mobile});background-size:100%`}"
    />
    <div
      class="hidden xl:block absolute bottom-[340px] w-full h-[610px] z-0 bg-no-repeat bg-cover"
      :style="{'background-image': `url(${first_bottom})`}"
    />
    <div
      class="hidden xl:block absolute bottom-0 w-full h-[918px] z-0 bg-no-repeat bg-cover"
      :style="{'background-image': `url(${first_top})`}"
    />
  </div>
  <div v-if="position === 'bottom'" class="relative w-full h-[960px] xl:h-[433px] mb-[-960px] xl:mb-[-433px] z-0">
    <div
      class="xl:hidden absolute top-[71px] w-full h-[610px] z-0 bg-no-repeat"
      :style="{'background-image': `url(${second_bottom_mobile});background-size:100%`}"
    />
    <div
      class="xl:hidden absolute top-[288px] w-full h-[918px] z-0 bg-no-repeat"
      :style="{'background-image': `url(${second_top_mobile});background-size:100%`}"
    />
    <div
      class="hidden xl:block absolute top-[71px] w-full h-[610px] z-0 bg-no-repeat bg-cover"
      :style="{'background-image': `url(${second_bottom})`}"
    />
    <div
      class="hidden xl:block absolute top-[288px] w-full h-[918px] z-0 bg-no-repeat bg-cover"
      :style="{'background-image': `url(${second_top})`}"
    />
  </div>
</template>

<script setup lang="ts">
import first_bottom_mobile from '../../assets/images/background/first_bottom_mobile.svg'
import first_top_mobile from '../../assets/images/background/first_top_mobile.svg'
import first_bottom from '../../assets/images/background/first_bottom.svg'
import first_top from '../../assets/images/background/first_top.svg'
import second_bottom from '../../assets/images/background/second_bottom.svg'
import second_top from '../../assets/images/background/second_top.svg'
import second_bottom_mobile from '../../assets/images/background/second_bottom_mobile.svg'
import second_top_mobile from '../../assets/images/background/second_top_mobile.svg'

const {
  position
} = defineProps<{
  position: 'top' | 'bottom'
}>()
</script>