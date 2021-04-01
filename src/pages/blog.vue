<template>
  <v-row>
    <v-col cols="12" sm="2">
      <v-sheet
        rounded="lg"
        min-height="268"
        :dark="$colorMode.value === 'dark'"
      >
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="8">
      <v-sheet
        min-height="70vh"
        rounded="lg"
        :dark="$colorMode.value === 'dark'"
      >
        <v-card class="mx-auto" flat :dark="$colorMode.value === 'dark'">
          <v-card-title>Blog</v-card-title>
          <v-card-subtitle>ブログ</v-card-subtitle>
          <v-divider></v-divider>
        </v-card>
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="2">
      <v-sheet
        rounded="lg"
        min-height="268"
        :dark="$colorMode.value === 'dark'"
      >
        <!--  -->
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
