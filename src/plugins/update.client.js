export default function ({ store }) {
  // 開発時のみ
  if (process.dev) {
    window.onNuxtReady(($nuxt) => {
      $nuxt.$on('content:update', ({ event, path }) => {
        // storeのカテゴリを更新
        store.dispatch('fetchCategories')
      })
    })
  }
}
