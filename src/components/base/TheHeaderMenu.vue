<!-- HeaderSVGメニューコンポーネント -->
<template>
  <div class="header-menu-outer">
    <a class="header-menu" @click="isClick">
      <svg v-if="!isActive" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle cx="33" cy="33" r="32"></circle>
      </svg>
      <svg v-if="isActive" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle style="stroke: #000000" cx="33" cy="33" r="32"></circle>
      </svg>
      <span class="outer-menu" v-if="!isActive">Menu</span>
      <span class="outer-menu outer-menu__close" v-if="isActive">Close</span>
    </a>
    <div class="wrapper-menu" v-show="isActive">
      <div class="wrapper-menu-left"></div>
      <div class="wrapper-menu-right">
        <ul class="">
          <!-- TOP -->
          <li>
            <nuxt-link to="/" data-id="GoHome" @click.native="isClick">TOP</nuxt-link>
          </li>
          <!-- Who me are -->
          <li>
            <nuxt-link to="/who-me-are" data-id="LearnMore" @click.native="isClick">Who me are</nuxt-link>
          </li>
          <!-- Blog -->
          <!-- <li>
            <nuxt-link to="/blog" data-id="LearnMore" @click.native="isClick">Blog</nuxt-link>
          </li> -->
          <!-- Collection of works -->
          <li>
            <nuxt-link to="/collection" data-id="LearnMore" @click.native="isClick">Collection of works</nuxt-link>
          </li>
          <!-- Contact -->
          <li>
            <nuxt-link to="/contact" data-id="LearnMore" @click.native="isClick">Contact</nuxt-link>
          </li>
        </ul>
        <address>Copyright©2020 HelloAnotherWorld All Rights Reserved.</address>
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
  /** クリックフラグ */
  private isActive: boolean = false;

  /** クリックイベント */
  isClick() {
    this.isActive = !this.isActive;
  }
}
</script>
