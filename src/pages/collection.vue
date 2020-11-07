<template>
  <div class="wrapper-page">
    <h2>
      <span>Collection of works</span>
      <span class="ja ja-h2">作品集</span>
    </h2>
    <div class="wrapper-page-content"></div>
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
      title: 'Collection of works - HelloAnotherWorld',
    };
  }
}
</script>
