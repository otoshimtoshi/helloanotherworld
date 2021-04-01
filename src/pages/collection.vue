<template>
  <v-row>
    <v-col cols="2">
      <v-sheet
        rounded="lg"
        min-height="268"
        :dark="$colorMode.value === 'dark'"
      >
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet
        min-height="70vh"
        rounded="lg"
        :dark="$colorMode.value === 'dark'"
      >
        <v-card class="mx-auto" flat :dark="$colorMode.value === 'dark'">
          <v-card-title>Collection of works</v-card-title>
          <v-card-subtitle>作品集</v-card-subtitle>
          <v-divider></v-divider>
        </v-card>
      </v-sheet>
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
      metaInfo: app.store.getters.getMetaInfo('collection')
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
