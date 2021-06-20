<template>
  <div class="who-me-are">
    <h1>
      <span class="who-me-are__title">Who me are</span>
    </h1>
    <h2>
      <span class="who-me-are__sub-title">自己紹介</span>
    </h2>
    <div class="who-me-are__body en">
      Hi! My name is Masatoshi Otoshi.<br />I'm a front-end developer based in
      Tokyo.<br />Please contact me via DM on SNS.
    </div>
    <div class="who-me-are__body ja">
      落司 聖稔(おとし まさとし)<br />東京でフロントエンドディベロッパーとして活動しています。<br />GithubやTwitterでご連絡ください。
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
