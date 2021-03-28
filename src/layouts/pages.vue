<template lang="ja">
  <v-app>
    <BaseTheHeader />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <BaseThePagesFooter />
  </v-app>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const state = reactive({
      store: app.store.state
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
