<template>
  <div class="wrapper-page">
    <h1>
      <span>Blog</span>
      <span class="ja ja-h2">ブログ</span>
    </h1>
    <div class="wrapper-page-content">
      <div class="markdown-body">
        <!-- <nuxt-content :document="article" /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  onMounted,
  reactive,
  toRefs
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { app, $content } = useContext();
    const state = reactive({
      article: {},
      metaInfo: app.store.getters.getMetaInfo('blog')
    });
    onMounted(async () => {
      state.article = await $content('blog', 'index').fetch();
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
