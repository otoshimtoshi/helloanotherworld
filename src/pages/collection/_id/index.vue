<template>
  <main class="pages">
    <template v-if="params.id === 'office'">
      <CollectionOffice src="/office.glb" />
    </template>
    <template v-else>Not Found</template>
  </main>
</template>

<script setup lang="ts">
import { useNuxt2Meta } from '#app'
import { useMetaInfo } from '~~/src/composable/useMetaInfo'

const { getMetaInfo } = useMetaInfo()
const metaInfo = getMetaInfo('who_i_am')

const { params } = useRoute()

useNuxt2Meta(() => ({
  title: metaInfo?.title,
  meta: metaInfo?.meta
}))
</script>
