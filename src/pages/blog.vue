<template>
  <div class="wrapper-page">
    <div class="markdown-body">
      <nuxt-content :document="page" />
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
