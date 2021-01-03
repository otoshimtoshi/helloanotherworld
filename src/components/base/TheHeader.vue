<!-- Headerコンポーネント -->
<template>
  <header class="header">
    <nav class="header-nav">
      <!-- Header Logo -->
      <h1 class="logo">
        <nuxt-link to="/" data-id="GoHome">
          <span class="stroke-black">Hello</span>
          <span class="stroke-white">Another</span>
          <span class="stroke-black">World</span>
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
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
});
</script>
