import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: true,
  target: 'static',
  head: {
    title: 'helloanotherworld.com',
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
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'helloanotherworld.com'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:image', name: 'twitter:image', content: '/ogp.jpg' }
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
    transpile: ['three'],
    extend(config) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
        exclude: /node_modules/
      })
    }
  },
  plugins: [{ src: '@/plugins/scroll-magic', mode: 'client' }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa'
  ],
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  }
}

export default config
