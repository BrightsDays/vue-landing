<template>
  <div class="flex flex-col items-center mb-[100px] md:mb-[140px] xl:mb-[200px]">
    <div class="flex items-center justify-between md:mb-[72px] w-full">
      <UiHeading main="Available Workshops" class="md:mb-0"/>
      <UiButton class="hidden xl:block">
        See all the workshops
      </UiButton>
    </div>
    <div class="mb-10 md:mb-14 overflow-hidden w-svw">
      <div class="flex gap-2 md:gap-[30px] overflow-x-auto px-[15px] md:px-10 xl:px-[135px] no-scrollbar">
        <UiWorkshop />
        <UiWorkshop />
        <UiWorkshop />
      </div>
    </div>
    <UiButton class="xl:hidden">
      See all the workshops
    </UiButton>
  </div>
</template>