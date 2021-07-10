<template>
  <div>
    <WebglGltfViewer src="/logo.glb" />
    <!-- <WebglCloud /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext, toRefs, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const metaState = reactive({
      metaInfo: app.store.getters.getMetaInfo('index')
    })
    useMeta(() => ({
      title: metaState.metaInfo?.title,
      meta: metaState.metaInfo?.meta
    }))

    return {
      ...toRefs(metaState)
    }
  },
  // @ts-ignore
  head() {}
})
</script>
