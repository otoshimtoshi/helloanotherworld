<template>
  <div class="wrapper-page">
    <h1>
      <span>Collection of works</span>
      <span class="ja ja-h2">作品集</span>
    </h1>
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
