<template>
  <div>
    <WebglGltfViewer src="/logo.glb" :mode="colorMode" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useContext,
  toRefs,
  useMeta,
  computed
} from '@nuxtjs/composition-api'

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

    const colorMode = computed(() => app.$colorMode.preference)

    return {
      ...toRefs(metaState),
      colorMode
    }
  },
  // @ts-ignore
  head() {}
})
</script>
