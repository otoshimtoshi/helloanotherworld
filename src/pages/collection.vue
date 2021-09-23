<template>
  <div class="main">
    <div>Collection of works</div>
    <div>作品集</div>
    <Pointer />
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
