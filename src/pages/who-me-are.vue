<template>
  <v-row dense>
    <v-col>
      <v-card flat tile class="mx-auto" max-width="600">
        <v-card-title>Who me are</v-card-title>
        <v-card-subtitle>自己紹介</v-card-subtitle>
        <v-divider />
        <v-card-text>
          Hi ! My name is Masatoshi Otoshi.<br />I'm a front-end developer based
          in Tokyo.<br />Please contact me via DM on SNS.
        </v-card-text>
        <v-divider />
        <v-card-text>
          落司 聖稔(おとし まさとし)<br />東京でフロントエンドディベロッパーとして活動しています。<br />GithubやTwitterでご連絡ください。
        </v-card-text>
        <v-divider />
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
      metaInfo: app.store.getters.getMetaInfo('who-me-are')
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
