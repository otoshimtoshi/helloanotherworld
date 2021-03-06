export default {
  ssr: true,
  target: 'static',
  components: true,
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
  axios: {},
  srcDir: 'src/',
  build: {
    transpile: ['three']
  },
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true
  },
  plugin: [
    '@/plugins/axios',
    '@/plugins/scroll-magic',
    '@/plugins/util/date',
    '@/plugins/util/format'
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/sitemap'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/date-fns'
  ],
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  }
}
