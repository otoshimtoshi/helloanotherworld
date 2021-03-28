<template>
  <v-row dense>
    <v-col>
      <v-card flat tile class="mx-auto" max-width="600">
        <v-card-title>Blog</v-card-title>
        <v-card-subtitle>ブログ</v-card-subtitle>
        <v-divider></v-divider>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs,
  useMeta
} from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'pages',
  setup() {
    const { app } = useContext()
    const state = reactive({
      article: {},
      metaInfo: app.store.getters.getMetaInfo('blog')
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
