<template>
  <div class="flex flex-col items-center mb-[100px] md:mb-[140px]">
    <UiHeading main="Available Workshops" class="md:mb-[72px]" />
    <div class="mb-10 md:mb-14 overflow-hidden w-svw">
      <div class="flex gap-2 md:gap-[30px] overflow-x-auto px-[15px] md:px-10 no-scrollbar">
        <UiWorkshop />
        <UiWorkshop />
        <UiWorkshop />
      </div>
    </div>
    <UiButton>
      See all the workshops
    </UiButton>
  </div>
</template>