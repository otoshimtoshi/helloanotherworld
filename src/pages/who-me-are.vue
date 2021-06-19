<template>
  <div>
    <div>Who me are</div>
    <div>自己紹介</div>
    <div>
      Hi! My name is Masatoshi Otoshi.<br />I'm a front-end developer based in
      Tokyo.<br />Please contact me via DM on SNS.
    </div>
    <div>
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
