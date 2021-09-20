<template>
  <div class="pages">
    <div class="inner">
      <div>
        <h1 class="title">Who i am</h1>
      </div>
      <div class="content">
        <div>Hi! My name is Masatoshi Otoshi.</div>
        <div>I'm a front-end developer based in Tokyo.</div>
        <div>Please contact me via DM on SNS.</div>
      </div>
      <div>
        <h2 class="sub-title">自己紹介</h2>
      </div>
      <div class="content">
        <div>落司 聖稔(おとし まさとし)</div>
        <div>東京でフロントエンドディベロッパーとして活動しています。</div>
        <div>GithubやTwitterでご連絡ください。</div>
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
      metaInfo: app.store.getters.getMetaInfo('who-i-am')
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
