<template>
  <div class="flex flex-col items-center mb-[100px]">
    <UiHeading main="Available Workshops" />
    <div class="mb-10 overflow-hidden w-svw">
      <div class="flex gap-2 overflow-x-auto px-[15px] no-scrollbar">
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