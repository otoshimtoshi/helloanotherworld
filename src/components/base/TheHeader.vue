<!-- Headerコンポーネント -->
<template>
  <header class="header">
    <nav class="header-nav">
      <!-- Header Logo -->
      <h1 class="logo">
        <nuxt-link to="/" data-id="GoHome">
          <template v-if="root === 'index'">
            <span class="stroke-black">Hello</span>
            <span class="stroke-white">Another</span>
            <span class="stroke-black">World</span>
          </template>
          <template v-if="root === 'blog'">
            <span class="stroke-black">Blog</span>
          </template>
          <template v-if="root === 'who-me-are'">
            <span class="stroke-black">Who</span>
            <span class="stroke-white">Me</span>
            <span class="stroke-black">Are</span>
          </template>
          <template v-if="root === 'collection'">
            <span class="stroke-black">Collection</span>
            <span class="stroke-white">of</span>
            <span class="stroke-black">Works</span>
          </template>
          <template v-if="root === 'contact'">
            <span class="stroke-black">Contact</span>
          </template>
        </nuxt-link>
      </h1>
      <!-- Header Menu -->
      <ul class="header-nav-menu">
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
          <nuxt-link to="/collection" data-id="LearnMore">
            Collection of works
          </nuxt-link>
        </li>
        <!-- Contact -->
        <li>
          <nuxt-link to="/contact" data-id="LearnMore">Contact</nuxt-link>
        </li>
      </ul>
      <TheHeaderMenu />
    </nav>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  computed,
  toRefs
} from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const { route } = useContext();
    const state = reactive({
      root: computed(() => route.value.name)
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
