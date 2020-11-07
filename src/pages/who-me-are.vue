<template>
  <div class="wrapper-page">
    <h2>
      <span>Who me are</span>
      <span class="ja ja-h2">自己紹介</span>
    </h2>
    <div class="wrapper-page-content">
      <div class="wrap-who-me-are">
        <p>Hi! My name is Masatoshi Otoshi.<br />I'm a front-end developer based in Tokyo.<br />Please contact me via DM on SNS.</p>
        <p><span class="ja">落司 聖稔(おとし まさとし)</span></p>
        <p><span class="ja">東京でフロントエンドディベロッパーとして活動しています。</span><br /><span class="ja">GithubやTwitterでご連絡ください。</span></p>
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
      title: 'Who me are - HelloAnotherWorld',
    };
  }
}
</script>
