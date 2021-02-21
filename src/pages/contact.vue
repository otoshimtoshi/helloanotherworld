<template>
  <div class="wrapper-page">
    <h1>
      <span>Contact</span>
      <span class="ja ja-h2">お問い合わせ</span>
    </h1>
    <div class="wrapper-page-content">
      <GithubIcon />
      <MailIcon />
      <TwitterIcon />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  head() {
    return {
      title: 'Contact - HelloAnotherWorld'
    };
  }
});
</script>
