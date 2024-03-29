<template>
  <div class="bg-main pb-[8.2rem] md:pb-[8.75rem]">
    <div class="2xl:max-w-[1536px] 2xl:mx-auto px-3.5 md:px-10 xl:px-[8.5rem]">
      <AppHeader />
      <AppPromo />
    </div>
    <UiBackground position="top" />
    <div class="2xl:max-w-[1536px] 2xl:mx-auto px-3.5 md:px-10 xl:px-[8.5rem]">
      <AppAbout />
      <AppStats />
    </div>
    <UiBackground position="bottom" />
    <div class="2xl:max-w-[1536px] 2xl:mx-auto px-3.5 md:px-10 xl:px-[8.5rem]"> 
      <AppBundles />
      <AppWorkshops />
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
// const sanity = useSanity()

// const query = groq`{ "siteSettings": *[_type == "siteSettings"]{ 
//   title,
//   heading_before,
//   heading_marked,
//   heading_after,
// } }`
// const { data } = await useAsyncData('siteSettings', () => sanity.fetch(query))

useHead({
  title: 'Vue Landing',
  meta: [
    {
      name: 'description',
      content: 'Test task'
    }
  ]
})
</script>