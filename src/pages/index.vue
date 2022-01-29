<template>
  <main>
    <div class="top">
      <div class="top__inner">
        <h1>
          <span class="top__title">Hello Another World</span>
        </h1>
        <h2>
          <span class="top__sub-title">designer</span>
          <span class="top__sub-title">|</span>
          <span class="top__sub-title">developer</span>
          <span class="top__sub-title">|</span>
          <span class="top__sub-title">derector</span>
        </h2>
      </div>
    </div>
    <Pointer />
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, useMeta } from '#imports'
import { useNuxtApp } from '#app'

export default defineComponent({
  setup() {
    const { app } = useNuxtApp()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('index')
    })
    useMeta(() => ({
      title: state.metaInfo?.title,
      meta: state.metaInfo?.meta
    }))

    return {
      ...toRefs(state)
    }
  },
  // @ts-ignore
  head() {}
})
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
  .top__inner {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
  .top__title {
    font-weight: 100;
    letter-spacing: 0.3em;
    text-shadow: 2px 5px 5px var(--text-shadow);
    font-size: 0;
  }
  .top__sub-title {
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
