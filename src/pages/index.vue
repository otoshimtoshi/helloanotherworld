<template>
  <main>
    <div class="top">
      <div class="top-inner">
        <h1>
          <span class="top-title">Hello Another World</span>
        </h1>
        <h2>
          <span class="top-sub-title">designer</span>
          <span class="top-sub-title">|</span>
          <span class="top-sub-title">developer</span>
          <span class="top-sub-title">|</span>
          <span class="top-sub-title">derector</span>
        </h2>
      </div>
    </div>
    <Pointer />
  </main>
</template>

<script setup lang="ts">
import { useNuxt2Meta } from '#app'
import { useMetaInfo } from '~~/src/composable/useMetaInfo'

const { getMetaInfo } = useMetaInfo()
const metaInfo = getMetaInfo('index')

useNuxt2Meta(() => ({
  title: metaInfo?.title,
  meta: metaInfo?.meta
}))
</script>

<style lang="scss" scoped>
.top {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 20;
  animation: fadeIn 3s;
  .top-inner {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
  .top-title {
    font-weight: 100;
    letter-spacing: 0.3em;
    text-shadow: 2px 5px 5px var(--text-shadow);
    font-size: 0;
  }
  .top-sub-title {
    letter-spacing: 0.2em;
    padding: 0 3vw;
    text-transform: uppercase;
    font-size: 1vw;
    @include mq('large', max) {
      font-size: 14px;
      padding: 0 2vw;
    }
  }
}
</style>
