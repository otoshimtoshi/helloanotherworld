<template>
  <div class="wrapper-page">
    <h2>
      <span>Contact</span>
      <span class="ja ja-h2">お問い合わせ</span>
    </h2>
    <div class="wrapper-page-content">
      <GithubIcon />
      <!-- <MailIcon /> -->
      <TwitterIcon />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
import TwitterIcon from '@/components/icons/TwitterIcon.vue';

@Component({
  components: {
    GithubIcon,
    MailIcon,
    TwitterIcon,
  },
})
export default class extends Vue {
  head() {
    return {
      title: 'Contact - HelloAnotherWorld',
    };
  }
}
</script>
