<!-- Headerコンポーネント -->
<template>
  <header
    id="header"
    class="header"
    :style="isScroll ? 'position: fixed;' : ''"
  >
    <nav class="header-nav">
      <!-- Header Logo -->
      <h1 class="logo" :class="{ header_scroll_color: isScroll }">
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
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
} from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const state = reactive({
      isScroll: false,
      headerHeight: 0,
    });
    onMounted(() => {
      window.addEventListener('scroll', () => {
        // header高さを取得
        var height = document.getElementById('header');
        // wrapperを取得
        const wrapper = document.getElementById('wrapper');
        if (height !== null && wrapper !== null) {
          state.headerHeight = height.clientHeight;
          wrapper.style.marginTop = state.headerHeight + 'px';
        } else {
          return;
        }
        if (window.scrollY > 50) {
          state.isScroll = true;
        } else {
          wrapper.style.marginTop = 'unset';
          state.isScroll = false;
        }
      });
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
