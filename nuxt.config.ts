import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: true,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'helloanotherworld.com',
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-M81ETYC1VY',
        async: true
      },
      {
        hid: 'gtag',
        type: 'text/javascript',
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-M81ETYC1VY');`
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      clarity: ['innerHTML'],
      gtag: ['innerHTML']
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
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://helloanotherworld.com/ogp.png'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'helloanotherworld.com'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://helloanotherworld.com/ogp.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#111111' },
  css: ['@/assets/scss/main.scss'],
  router: {
    trailingSlash: true
  },
  components: true,
  env: {},
  srcDir: 'src/',
  axios: {},
  build: {
    transpile: ['three'],
    extend(config) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        use: ['raw-loader', 'glslify-loader'],
        exclude: /node_modules/
      })
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 1000000,
        minChunks: 3,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true
      }
    }
  },
  plugins: [],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/foundation/_initial-variables.scss',
      '@/assets/scss/foundation/_mixin-utils.scss'
    ]
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  },
  pwa: {
    icon: {},
    manifest: {
      name: 'helloanotherworld',
      short_name: 'helloanotherworld',
      icons: [],
      start_url: 'https://helloanotherworld.com',
      display: 'standalone',
      description:
        'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.',
      lang: 'ja',
      theme_color: '#0b151b',
      useWebmanifestExtension: false
    }
  }
}

export default config
