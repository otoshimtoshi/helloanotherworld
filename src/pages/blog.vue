<template>
  <div class="wrapper-page">
    <h2>
      <span>Blog</span>
      <span class="ja ja-h2">ブログ</span>
    </h2>
    <div class="wrapper-page-content">
      <div class="markdown-body">
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  onMounted,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const article = ref<Object>({});
    onMounted(async () => {
      article.value = await $content('blog', 'index').fetch();
    });
    return {
      article,
    };
  },
  head() {
    return {
      title: 'Blog - HelloAnotherWorld',
    };
  },
});
</script>
