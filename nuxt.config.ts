// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/scss/global.scss"],
  typescript: {
    shim: false,
  },
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: "English Dictionary",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

    },

  },
})
