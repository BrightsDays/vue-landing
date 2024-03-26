<template>
  <div class="flex flex-col gap-4 px-4 py-6 bg-[#212435] rounded-2xl">
    <div class="flex gap-[10px] items-center">
      <span class="text-[2.5rem]/[47.4px] text-white font-bold">$50</span>
      <span class="text-base text-[#A0A8C3]">/ seat / month</span>
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-base text-white font-bold">How many licenses do you need?</span>
      <input type="range" min="5" max="20" v-model="seats">
      <div class="flex justify-between">
        <span class="text-sm text-[#737B98]">5</span>
        <span class="text-sm text-[#737B98]">20</span>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex gap-2.5 items-center bg-[#0E0E1033] px-3.5 py-1 rounded-lg">
        <img :src="persons" alt="Persons" />
        <span class=" text-[26px]/[30px] text-[#E8E6E6] font-bold">
          {{ seats }}
        </span>
        <span class="text-base text-[#979FAD]">
          seats
        </span>
      </div>
      <span class="text-base text-[#0BD88F]">
        26% discount
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import persons from '../../assets/images/persons.svg'

const seats = ref(12)
//TODO: change pixels to rem in sizes
</script>