<template>
  <div class="wrapper-page">
    <h2>
      <span>Collection of works</span>
      <span class="ja ja-h2">作品集</span>
    </h2>
    <div class="wrapper-page-content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  head() {
    return {
      title: 'Collection of works - HelloAnotherWorld'
    };
  }
});
</script>
