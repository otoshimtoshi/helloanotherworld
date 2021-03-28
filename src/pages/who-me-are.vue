<template>
  <div class="wrapper-page">
    <h1>
      <span>Who me are</span>
      <span class="ja ja-h2">自己紹介</span>
    </h1>
    <div class="wrapper-page-content">
      <div class="wrap-who-me-are">
        <p>
          Hi! My name is Masatoshi Otoshi.<br />I'm a front-end developer based
          in Tokyo.<br />Please contact me via DM on SNS.
        </p>
        <p><span class="ja">落司 聖稔(おとし まさとし)</span></p>
        <p>
          <span class="ja">
            東京でフロントエンドディベロッパーとして活動しています。
          </span>
          <br />
          <span class="ja">GithubやTwitterでご連絡ください。</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs,
  useMeta
} from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'pages',
  setup() {
    const { app } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('who-me-are')
    })

    useMeta(() => ({
      title: state.metaInfo?.title,
      meta: state.metaInfo?.meta
    }))
    return {
      ...toRefs(state)
    }
  },
  // @ts-ignore
  head() {}
})
</script>
