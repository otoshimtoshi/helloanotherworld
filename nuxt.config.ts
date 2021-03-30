import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: true,
  target: 'static',
  head: {
    title: 'HelloAnotherWorld',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#111111' },
  css: ['@/assets/scss/main.scss'],
  components: true,
  env: {},
  srcDir: 'src/',
  styleResources: {
    sass: [],
    scss: []
  },
  axios: {},
  build: {
    transpile: ['three']
  },
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    '@nuxtjs/color-mode',
    '@nuxtjs/vuetify'
  ],
  modules: ['@nuxtjs/sitemap'],
  vuetify: {
    customVariables: ['@/assets/scss/vuetify/index.scss'],
    treeShake: true,
    optionsPath: '@/plugins/vuetify.options'
  },
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  }
}

export default config
