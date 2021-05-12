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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'helloanotherworld.com'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://helloanotherworld.com'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'helloanotherworld.com'
      },
      { hid: 'og:image', property: 'og:image', content: '/ogp.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
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
  plugins: [{ src: '@/plugins/scroll-magic', mode: 'client' }],
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
    treeShake: true
  },
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  }
}

export default config
