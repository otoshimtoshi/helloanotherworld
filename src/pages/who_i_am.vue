<template>
  <main class="pages">
    <section class="inner">
      <div>
        <h1 class="title en">Who I Am</h1>
        <h2 class="sub-title">自己紹介</h2>
      </div>
    </section>
    <section class="inner">
      <div class="content">
        <div>落司 聖稔(おとし まさとし)</div>
        <div>
          <a href="https://jam-company.co.jp/" target="_blank" rel="nofollow"
            >株式会社<span class="en">JAM</span></a
          >
          <span>に勤めています。</span>
        </div>
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
          <span>もしくは、</span>
          <span>
            <a
              href="https://jam-company.co.jp/contact_com/"
              target="_blank"
              rel="nofollow"
              >株式会社<span class="en">JAM</span>お問合せより</a
            >
          </span>
          <span>ご連絡ください。</span>
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
} from '#imports'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('who_i_am')
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
