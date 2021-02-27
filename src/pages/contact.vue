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
  toRefs
} from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const { app } = useContext();
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('contact')
    });
    return {
      ...toRefs(state)
    };
  },
  head() {
    return {
      title: this.metaInfo?.title,
      meta: this.metaInfo?.meta
    };
  }
});
</script>
