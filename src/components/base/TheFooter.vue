<!-- Footerコンポーネント -->
<template>
  <footer class="footer" :style="isFixed">
    <nav class="footer-nav">
      <!-- Footer Logo -->
      <div class="logo">
        <nuxt-link to="/" data-id="GoHome"> <span class="stroke-white">Hello</span><span class="stroke-black">Another</span><span class="stroke-white">World</span> </nuxt-link>
      </div>
      <ul class="footer-nav-menu">
        <!-- Who me are -->
        <li>
          <nuxt-link to="/who-me-are" data-id="LearnMore">Who me are</nuxt-link>
        </li>
        <!-- Blog -->
        <!-- <li>
          <nuxt-link to="/blog" data-id="LearnMore">Blog</nuxt-link>
        </li> -->
        <!-- Collection of works -->
        <li>
          <nuxt-link to="/collection" data-id="LearnMore">Collection of works</nuxt-link>
        </li>
        <!-- Contact -->
        <li>
          <nuxt-link to="/contact" data-id="LearnMore">Contact</nuxt-link>
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
