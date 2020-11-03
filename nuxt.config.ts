const path = require('path');
const environment = process.env.NODE_ENV || 'development';
const envSet = require(`./.env.${environment}`);

export default {
  ssr: 'false',
  target: 'static',
  env: envSet,
  // server: {
  //   host: '0.0.0.0', // default: localhost,
  //   timing: false,
  // },
  head: {
    title: 'HelloAnotherWorld',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'HelloAnotherWorld〜技術記事用Webサイト〜',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Masatoshi Otoshi, Nuxt.js, three.js, Front End Developer',
      },
      { hid: 'og:title', name: 'og:title', content: 'HelloAnotherWorld' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Masatoshi Otoshi, Nuxt.js, three.js, Front End Developer',
      },
      { hid: 'og:url', name: 'og:url', content: `${envSet.URL}` },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'HelloAnotherWorld〜技術記事用Webサイト〜',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'HelloAnotherWorld〜技術記事用Webサイト〜',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#111111' },
  css: ['@/assets/css/main.scss'],
  build: {
    extend(config) {
      if (!!config.module) {
        config.module.rules.push(
          {
            test: /\.(glsl|fs|vs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'glslify-import-loader',
            },
          },
          {
            test: /\.(glsl|fs|vs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'raw-loader',
            },
          },
          {
            test: /\.(glsl|fs|vs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'glslify-loader',
            },
          }
        );
      }
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        '@/*': path.resolve(__dirname, 'src/*'),
        '~/*': path.resolve(__dirname, './*'),
      },
    },
    target: 'static',
  },
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true,
  },
  plugin: ['@/plugins/update.client.js'],
  modules: ['@nuxtjs/axios', '@nuxt/content'],
  // generate: {
  //   async routes() {
  //     const { $content } = require('@nuxt/content');
  //     const files = await $content().only(['path']).fetch();
  //     console.log(files);
  // return files.map((file) => (file.path === '/index' ? '/' : file.path));
  //   },
  // },
  axios: {},
  srcDir: 'src/',
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
