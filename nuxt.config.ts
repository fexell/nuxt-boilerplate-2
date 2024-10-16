// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  build: {
    transpile: [
      // To prevent FontAwesome complaining that the icon cannot be found
      // See this github issue: https://github.com/FortAwesome/vue-fontawesome/issues/215
      '@fortawesome/vue-fontawesome',
    ],
  },
  css: [
    // Without this the icons becomes ridiculously big
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Add Google Fonts here ⬇
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
})