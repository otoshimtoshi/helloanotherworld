<template>
  <div class="main">
    <div>Contact</div>
    <div>お問い合わせ</div>
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
