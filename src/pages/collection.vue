<template>
  <div class="wrapper-page">
    <h1>
      <span>Collection of works</span>
      <span class="ja ja-h2">作品集</span>
    </h1>
    <div class="wrapper-page-content" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { app } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('collection')
    })
    return {
      ...toRefs(state)
    }
  },
  head() {
    return {
      title: this.metaInfo?.title,
      meta: this.metaInfo?.meta
    }
  }
})
</script>
