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
