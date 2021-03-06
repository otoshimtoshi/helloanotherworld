import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,
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
  plugin: ['@/plugins/util/date'],
  components: true,
  env: {},
  srcDir: 'src/',
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  modules: ['@nuxtjs/sitemap'],
  build: {
    transpile: ['three']
  },
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true
  },
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  },
  styleResources: {
    sass: [],
    scss: []
  },
  axios: {}
}

export default config
