import path = require('path');

export default {
  ssr: 'false',
  target: 'static',
  components: true,
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
        hid: 'keywords',
        name: 'keywords',
        content:
          'Masatoshi Otoshi, JS frameworks, Vue, Nuxt, three.js, 3D modeling, machine learning, CityGML'
      },
      { hid: 'og:title', name: 'og:title', content: 'HelloAnotherWorld' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://helloanotherworld.com'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HelloAnotherWorld'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#111111' },
  css: ['@/assets/scss/main.scss'],
  build: {
    transpile: ['three'],
    // eslint-disable-next-line
    extend(config, { isDev, isClient }) {
      config.module.rules.push(
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'glslify-import-loader'
          }
        },
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'raw-loader'
          }
        },
        {
          test: /\.(glsl|fs|vs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'glslify-loader'
          }
        }
      );
      // isDev が true の場合、webpack を開発モードに設定します
      if (isDev) {
        config.mode = 'development';
      }
      if (isClient) {
        config.devtool = 'source-map';
      }
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        '@/*': path.resolve(__dirname, 'src/*'),
        '~/*': path.resolve(__dirname, './*')
      }
    },
    target: 'static'
  },
  buildModules: ['@nuxtjs/composition-api', '@nuxt/typescript-build'],
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true
  },
  plugin: ['@/plugins/update.client.js'],
  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://helloanotherworld.com'
  },
  // generate: {
  //   async routes() {
  //     const { $content } = require('@nuxt/content');
  //     const files = await $content().only(['path']).fetch();
  //     console.log(files);
  // return files.map((file) => (file.path === '/index' ? '/' : file.path));
  //   },
  // },
  axios: {},
  srcDir: 'src/'
  // @nuxt/content カスタム設定
  // content: {
  // // デフォルト値
  // apiPrefix: '_content',
  // dir: 'content',
  // fullTextSearchFields: ['title', 'description', 'slug', 'text'],
  // nestedProperties: [],
  // markdown: {
  //   remarkPlugins: [
  //     'remark-squeeze-paragraphs',
  //     'remark-slug',
  //     'remark-autolink-headings',
  //     'remark-external-links',
  //     'remark-footnotes',
  //   ],
  //   rehypePlugins: [
  //     'rehype-minify-whitespace',
  //     'rehype-sort-attribute-values',
  //     'rehype-sort-attributes',
  //     'rehype-raw',
  //   ],
  //   prism: {
  //     theme: 'prismjs/themes/prism.css',
  //   },
  // },
  // yaml: {},
  // csv: {},
  // xml: {},
  // },
};
