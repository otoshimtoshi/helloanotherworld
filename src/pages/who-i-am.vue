<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Who i am</h1>
        <h2 class="sub-title">自己紹介</h2>
      </div>
    </section>
    <section class="inner">
      <div class="content">
        <div>落司 聖稔(おとし まさとし)</div>
        <div>東京でフロントエンドディベロッパーとして活動しています。</div>
        <div>
          <span class="en">
            <a href="https://github.com/otoshimtoshi" target="_blank">Github</a>
          </span>
          <span>や</span>
          <span class="en">
            <a href="https://twitter.com/otoshimtoshi" target="_blank"
              >Twitter</a
            >
          </span>
          <span>でご連絡ください。</span>
        </div>
      </div>
    </section>
    <Pointer />
  </main>
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
