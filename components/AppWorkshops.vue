<template>
  <div class="flex flex-col items-center mb-[6.25rem] md:mb-[8.75rem] xl:mb-[12.5rem]">
    <div class="flex items-center justify-between md:mb-[4.5rem] w-full">
      <UiHeading main="Available Workshops" class="md:mb-0 mx-auto xl:mx-0"/>
      <UiButton class="hidden xl:block">
        See all the workshops
      </UiButton>
    </div>
    <div class="mb-10 md:mb-14 overflow-hidden w-svw">
      <div class="flex gap-2 md:gap-8 overflow-x-auto px-3.5 md:px-10 xl:px-32 no-scrollbar">
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