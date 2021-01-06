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
        <circle style="stroke: #929295" cx="33" cy="33" r="32" />
      </svg>
      <span v-if="!isActive" class="outer-menu">Menu</span>
      <span v-if="isActive" class="outer-menu outer-menu__close">Close?</span>
    </a>
    <div v-show="isActive" class="wrapper-menu">
      <div class="wrapper-menu-left">
        <transition name="fade">
          <template v-if="isTop">
            <p class="fade-text">HelloAnotherWorld</p>
          </template>
        </transition>
        <transition name="fade">
          <template v-if="isWhoMeAre">
            <p class="fade-text">Who me are</p>
          </template>
        </transition>
        <transition name="fade">
          <template v-if="isBlog">
            <p class="fade-text">Blog</p>
          </template>
        </transition>
        <transition name="fade">
          <template v-if="isCollection">
            <p class="fade-text">Collection of works</p>
          </template>
        </transition>
        <transition name="fade">
          <template v-if="isContact">
            <p class="fade-text">Contact</p>
          </template>
        </transition>
      </div>
      <div class="wrapper-menu-right">
        <ul class="">
          <!-- TOP -->
          <li @mouseover="mouseOverTop" @mouseleave="mouseLeaveTop">
            <nuxt-link to="/" data-id="GoHome" @click.native="isClick">
              <span class="span-left">TOP</span>
              <span class="span-right">HelloAnotherWorld</span>
            </nuxt-link>
          </li>
          <!-- Who me are -->
          <li @mouseover="mouseOverWhoMeAre" @mouseleave="mouseLeaveWhoMeAre">
            <nuxt-link
              to="/who-me-are"
              data-id="LearnMore"
              @click.native="isClick"
            >
              <span class="span-left">Who me are</span>
              <span class="span-right ja">自己紹介</span>
            </nuxt-link>
          </li>
          <!-- Blog -->
          <!-- <li @mouseover="mouseOverBlog" @mouseleave="mouseLeaveBlog">
            <nuxt-link to="/blog" data-id="LearnMore" @click.native="isClick">
              <span class="span-left">Blog</span><span class="span-right ja">ブログ</span>
            </nuxt-link>
          </li> -->
          <!-- Collection of works -->
          <li
            @mouseover="mouseOverCollection"
            @mouseleave="mouseLeaveCollection"
          >
            <nuxt-link
              to="/collection"
              data-id="LearnMore"
              @click.native="isClick"
            >
              <span class="span-left">Collection of works</span>
              <span class="span-right ja">作品集</span>
            </nuxt-link>
          </li>
          <!-- Contact -->
          <li @mouseover="mouseOverContact" @mouseleave="mouseLeaveContact">
            <nuxt-link
              to="/contact"
              data-id="LearnMore"
              @click.native="isClick"
            >
              <span class="span-left">Contact</span>
              <span class="span-right ja">お問い合わせ</span>
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
      isTop: false,
      isWhoMeAre: false,
      isBlog: false,
      isCollection: false,
      isContact: false
    });

    const isClick = () => {
      return state.isActive
        ? (state.isActive = false)
        : (state.isActive = true);
    };

    /** TOP マウスオーバーイベント */
    const mouseOverTop = () => {
      return (state.isTop = true);
    };

    /** TOP マウスリーブイベント */
    const mouseLeaveTop = () => {
      return (state.isTop = false);
    };

    /** WhoMeAre マウスオーバーイベント */
    const mouseOverWhoMeAre = () => {
      return (state.isWhoMeAre = true);
    };

    /** WhoMeAre マウスリーブイベント */
    const mouseLeaveWhoMeAre = () => {
      return (state.isWhoMeAre = false);
    };

    /** Blog マウスオーバーイベント */
    const mouseOverBlog = () => {
      return (state.isBlog = true);
    };

    /** Blog マウスリーブイベント */
    const mouseLeaveBlog = () => {
      return (state.isBlog = false);
    };

    /** Collection マウスオーバーイベント */
    const mouseOverCollection = () => {
      return (state.isCollection = true);
    };

    /** Collection マウスリーブイベント */
    const mouseLeaveCollection = () => {
      return (state.isCollection = false);
    };

    /** Contact マウスオーバーイベント */
    const mouseOverContact = () => {
      return (state.isContact = true);
    };

    /** Contact マウスリーブイベント */
    const mouseLeaveContact = () => {
      return (state.isContact = false);
    };

    return {
      ...toRefs(state),
      isClick,
      mouseOverTop,
      mouseLeaveTop,
      mouseOverWhoMeAre,
      mouseLeaveWhoMeAre,
      mouseOverBlog,
      mouseLeaveBlog,
      mouseOverCollection,
      mouseLeaveCollection,
      mouseOverContact,
      mouseLeaveContact
    };
  }
});
</script>
