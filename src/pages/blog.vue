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
  ref,
  onMounted
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const article = ref<unknown>({});
    onMounted(async () => {
      article.value = await $content('blog', 'index').fetch();
    });
    return {
      article
    };
  },
  head() {
    return {
      title: 'Blog - HelloAnotherWorld'
    };
  }
});
</script>
