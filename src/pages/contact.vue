<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-sheet
        min-height="70vh"
        rounded="lg"
        :dark="$colorMode.value === 'dark'"
      >
        <v-card
          class="mx-auto"
          flat
          :dark="$colorMode.value === 'dark'"
          max-width="600"
        >
          <v-card-title>Contact</v-card-title>
          <v-card-subtitle>お問い合わせ</v-card-subtitle>
          <v-divider></v-divider>
          <v-container fluid>
            <v-row dense>
              <v-col cols="6">
                <v-card
                  outlined
                  elevation="2"
                  href="https://github.com/otoshimtoshi/"
                  target="_blank"
                >
                  <v-card-title>
                    <span>Github</span>
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-github</v-icon>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card
                  outlined
                  elevation="2"
                  href="https://twitter.com/otoshimtoshi"
                  target="_blank"
                >
                  <v-card-title>
                    <span>Twitter</span>
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-twitter</v-icon>
                  </v-card-title>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card
                  outlined
                  elevation="2"
                  href="mailto:info@helloanotherworld.com"
                  target="_blank"
                >
                  <v-card-title>
                    <span>Email</span>
                    <v-spacer></v-spacer>
                    <v-icon large>mdi-email</v-icon>
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
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
      metaInfo: app.store.getters.getMetaInfo('contact'),
      cards: [
        {
          title: 'Github',
          src: './github-top.png',
          flex: 12
        },
        {
          title: 'Twitter',
          src: './twitter-top.png',
          flex: 12
        },
        {
          title: 'Email',
          src: '',
          flex: 12
        }
      ]
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
