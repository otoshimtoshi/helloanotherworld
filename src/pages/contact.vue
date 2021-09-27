<template>
  <main class="pages">
    <LayoutsNavBar type="page" />
    <section class="inner">
      <div>
        <h1 class="title en">Contact</h1>
        <h2 class="sub-title">お問い合わせ</h2>
      </div>
      <div class="content">
        <div>フォームのご用意ができておりません。</div>
        <div>
          <span>ご依頼・ご相談がありましたら</span>
          <a href="mailto:info@helloanotherworld.com" target="_blank">メール</a>
          <span>までご連絡ください。</span>
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
      metaInfo: app.store.getters.getMetaInfo('contact')
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
