<template lang="ja">
  <v-app>
    <BaseTheHeader />
    <v-main>
      <nuxt />
    </v-main>
    <BaseTheFooter />
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
      store: app.store.state,
      colorMode: app.$colorMode
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
