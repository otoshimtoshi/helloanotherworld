<template>
  <div class="who-i-am">
    <div class="grid">
      <div>
        <h1 class="who-i-am__title">Who i am</h1>
      </div>
      <div><WebglCloud /></div>
    </div>
    <div class="grid">
      <div class="who-i-am__body en column-2-3">
        Hi! My name is Masatoshi Otoshi.<br />I'm a front-end developer based in Tokyo.<br />Please
        contact me via DM on SNS.
      </div>
    </div>
    <div class="grid">
      <div>
        <h2 class="who-i-am__sub-title column-2-3">自己紹介</h2>
      </div>
    </div>
    <div class="grid">
      <div class="who-i-am__body ja column-2-3">
        落司 聖稔(おとし まさとし)<br />東京でフロントエンドディベロッパーとして活動しています。<br />GithubやTwitterでご連絡ください。
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, reactive, toRefs, useMeta } from '@nuxtjs/composition-api'
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
