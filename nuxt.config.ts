// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/vue-landing/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: "l1a01ojd",
    withCredentials: true
  },
})
