<template>
  <main class="pages">
    <template v-if="id === 'office'">
      <CollectionOffice src="/office.glb" />
    </template>
    <template v-else>Not Found</template>
  </main>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  useContext,
  useMeta
} from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'collection',
  setup() {
    const { app, params } = useContext()

    const id = computed(() => params.value.id)

    const metaInfo = computed(() =>
      app.store.getters.getMetaInfo(params.value.id)
    )

    useMeta(() => ({
      title: metaInfo.value?.title,
      meta: metaInfo.value?.meta
    }))

    return {
      id
    }
  },
  // @ts-ignore
  head() {}
})
</script>
