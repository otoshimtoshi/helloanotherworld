<template>
  <main class="pages">
    <LayoutsNavBar type="page" />
    <section class="inner">
      <div>
        <h1 class="title en">Collection of works</h1>
        <h2 class="sub-title">作品集</h2>
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
      metaInfo: app.store.getters.getMetaInfo('collection')
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
