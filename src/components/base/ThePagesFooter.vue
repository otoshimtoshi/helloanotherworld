<template>
  <v-footer app padless :dark="$colorMode.value === 'dark'">
    <v-row dense>
      <v-col>
        <v-card flat tile class="text-center">
          <v-card-text>
            <v-btn
              class="mx-4"
              icon
              href="https://github.com/otoshimtoshi/"
              target="_blank"
            >
              <v-icon large>mdi-github</v-icon>
            </v-btn>
            <v-btn
              class="mx-4"
              icon
              href="https://twitter.com/otoshimtoshi"
              target="_blank"
            >
              <v-icon large>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="mx-4"
              icon
              href="mailto:info@helloanotherworld.com"
              target="_blank"
            >
              <v-icon large>mdi-email</v-icon>
            </v-btn>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <strong>
              Copyright©{{ new Date().getFullYear() }} HelloAnotherWorld
              AllRightsReserved.
            </strong>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const state = reactive({
      icons: ['mdi-github', 'mdi-twitter', 'mdi-email']
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
