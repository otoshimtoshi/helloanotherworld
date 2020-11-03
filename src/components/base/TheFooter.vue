<!-- Footerコンポーネント -->
<template>
  <footer class="footer" :style="isFixed">
    <nav class="footer-nav">
      <!-- Footer Logo -->
      <div class="logo">
        <nuxt-link to="/" id="GoHome"> <span class="stroke-white">Hello</span><span class="stroke-black">Another</span><span class="stroke-white">World</span> </nuxt-link>
      </div>
      <ul class="footer-nav-menu">
        <li>
          <!-- Who me are -->
          <nuxt-link to="/who-me-are" id="LearnMore">Who me are</nuxt-link>
        </li>
        <li>
          <!-- Blog -->
          <nuxt-link to="/blog" id="LearnMore">Blog</nuxt-link>
        </li>
        <li>
          <!-- Collection of works -->
          <nuxt-link to="/collection" id="LearnMore"> Collection of works </nuxt-link>
        </li>
        <li>
          <!-- Contact -->
          <nuxt-link to="/contact" id="LearnMore">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <address>Copyright©2020 HelloAnotherWorld All Rights Reserved.</address>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  get isFixed(): string {
    if (this.$route.name !== 'blog') {
      return 'position: fixed;';
    }
    return '';
  }
}
</script>

<style lang="scss" scoped></style>
