<template>
  <div class="wrapper-page">
    <h2>
      <span>Blog</span>
      <span class="ja ja-h2">ブログ</span>
    </h2>
    <div class="wrapper-page-content">
      <div class="markdown-body">
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  head() {
    return {
      title: 'Blog - HelloAnotherWorld',
    };
  }
  async asyncData({ $content }: { $content: any }) {
    const page = await $content('blog/index').fetch();

    return {
      page,
    };
  }
}
</script>
