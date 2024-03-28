<template>
  <div v-if="position === 'top'" class="relative w-full h-[950px] mt-[-200px] xl:mt-[-150px] mb-[-750px] xl:mb-[-800px] z-0 overflow-hidden md:overflow-visible">
    <div class='xl:hidden absolute top-[60px] md:top-0 w-[767px] md:w-full ml-[-321px] md:ml-0 h-max z-0'>
      <img :src="first_bottom" class="block w-full" />
    </div>
    <div class='xl:hidden absolute top-[60px] md:top-0 w-[767px] md:w-full ml-[-321px] md:ml-0 h-max z-0'>
      <img :src="first_top" class="block w-full" />
    </div>
    <div class='hidden xl:block absolute top-0 w-full h-max z-0'>
      <img :src="first_bottom" class="block w-full" />
    </div>
    <div class='hidden xl:block absolute top-0 w-full h-max z-0'>
      <img :src="first_top" class="block w-full" />
    </div>
  </div>
  <div v-if="position === 'bottom'" class="relative w-full md:ml-0 h-[960px] xl:h-[433px] mb-[-960px] xl:mb-[-433px] z-0 overflow-hidden md:overflow-visible">
    <div class='xl:hidden absolute top-[101px] md:top-[21px] w-full h-max z-0'>
      <img :src="second_bottom_mobile" class="block w-full" />
    </div>
    <div class='xl:hidden absolute top-[388px] md:top-[248px] w-[767px] md:w-full ml-[-321px] md:ml-0 h-max z-0'>
      <img :src="second_top_mobile" class="block w-full" />
    </div>
    <div class='hidden xl:block absolute top-[71px] w-full h-max z-0'>
      <img :src="second_bottom" class="block w-full" />
    </div>
    <div class='hidden xl:block absolute top-[288px] w-full h-max z-0'>
      <img :src="second_top" class="block w-full" />
    </div>
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