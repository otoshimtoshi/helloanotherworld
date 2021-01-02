<!-- HeaderSVGメニューコンポーネント -->
<template>
  <div class="header-menu-outer">
    <a class="header-menu" @click="isClick">
      <svg
        v-if="!isActive"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="33" cy="33" r="32" />
      </svg>
      <svg
        v-if="isActive"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle style="stroke: #000000" cx="33" cy="33" r="32" />
      </svg>
      <span v-if="!isActive" class="outer-menu">Menu</span>
      <span v-if="isActive" class="outer-menu outer-menu__close">Close</span>
    </a>
    <div v-show="isActive" class="wrapper-menu">
      <div class="wrapper-menu-left" />
      <div class="wrapper-menu-right">
        <ul class="">
          <!-- TOP -->
          <li>
            <nuxt-link to="/" data-id="GoHome" @click.native="isClick">
              TOP
            </nuxt-link>
          </li>
          <!-- Who me are -->
          <li>
            <nuxt-link
              to="/who-me-are"
              data-id="LearnMore"
              @click.native="isClick"
            >
              Who me are
            </nuxt-link>
          </li>
          <!-- Blog -->
          <li>
            <nuxt-link to="/blog" data-id="LearnMore" @click.native="isClick">
              Blog
            </nuxt-link>
          </li>
          <!-- Collection of works -->
          <li>
            <nuxt-link
              to="/collection"
              data-id="LearnMore"
              @click.native="isClick"
            >
              Collection of works
            </nuxt-link>
          </li>
          <!-- Contact -->
          <li>
            <nuxt-link
              to="/contact"
              data-id="LearnMore"
              @click.native="isClick"
            >
              Contact
            </nuxt-link>
          </li>
        </ul>
        <address>Copyright©2020 HelloAnotherWorld All Rights Reserved.</address>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';
export default defineComponent({
  setup() {
    const state = reactive({
      isActive: false,
    });

    const isClick = () => {
      return state.isActive
        ? (state.isActive = false)
        : (state.isActive = true);
    };
    return {
      ...toRefs(state),
      isClick,
    };
  },
});
</script>
