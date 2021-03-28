<template>
  <div class="wrapper-page">
    <h1>
      <span>Contact</span>
      <span class="ja ja-h2">お問い合わせ</span>
    </h1>
    <div class="wrapper-page-content">
      <IconsGithubIcon />
      <IconsMailIcon />
      <IconsTwitterIcon />
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
  layout: 'pages',
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
