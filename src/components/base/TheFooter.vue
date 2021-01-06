<!-- Footerコンポーネント -->
<template>
  <footer class="footer" :style="fixed ? 'position: relative;' : ''">
    <!-- <nav class="footer-nav">
      <div class="logo">
        <nuxt-link to="/" data-id="GoHome">
          <span class="stroke-white">Hello</span>
          <span class="stroke-black">Another</span>
          <span class="stroke-white">World</span>
        </nuxt-link>
      </div>
      <ul class="footer-nav-menu">
        <li>
          <nuxt-link to="/who-me-are" data-id="LearnMore">Who me are</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog" data-id="LearnMore">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/collection" data-id="LearnMore">Collection of works</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" data-id="LearnMore">Contact</nuxt-link>
        </li>
      </ul>
    </nav> -->
    <address>Copyright©2020 HelloAnotherWorld All Rights Reserved.</address>
  </footer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useContext,
  toRefs
} from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const { route } = useContext();
    const state = reactive({
      fixed: computed(() => route.value.name === 'blog')
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
