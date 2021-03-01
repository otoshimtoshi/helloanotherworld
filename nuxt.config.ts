import path from 'path';

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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
  plugin: [
    // '@/plugins/update.client.js',
    '@/plugins/axios',
    '@/plugins/scroll-magic',
    '@/plugins/util/date',
    '@/plugins/util/format'
  ],
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
