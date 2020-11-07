<!-- Headerコンポーネント -->
<template>
  <header class="header" id="header" :style="isFixed">
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
          <nuxt-link to="/collection" data-id="LearnMore">Collection of works</nuxt-link>
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
import { Component, Vue } from 'nuxt-property-decorator';
import TheHeaderMenu from '@/components/base/TheHeaderMenu.vue';

@Component({
  components: {
    TheHeaderMenu,
  },
})
export default class extends Vue {
  /** スクロールフラグ */
  private isScroll: boolean = false;
  /** ヘッダー高さ */
  private headerHeight: number = 0;

  get isFixed(): string {
    if (this.isScroll) {
      return 'position: fixed;';
    }
    return '';
  }
  /**
   * DOMのレンダリング後aタグを全て取得し取得タグのmousemove,mouseover,mouseoutイベント発火時
   * マウス座標を取得、ポインター座標へ取得座標を反映
   */
  mounted() {
    window.addEventListener('scroll', (e) => {
      // header高さを取得
      var height = document.getElementById('header');
      // wrapperを取得
      const wrapper = document.getElementById('wrapper');
      if (height !== null && wrapper !== null) {
        this.headerHeight = height.clientHeight;
        wrapper.style.marginTop = this.headerHeight + 'px';
      } else {
        return;
      }
      if (window.scrollY > 50) {
        this.isScroll = true;
      } else {
        wrapper.style.marginTop = 'unset';
        this.isScroll = false;
      }
    });
  }
}
</script>

<style lang="scss" scoped></style>
