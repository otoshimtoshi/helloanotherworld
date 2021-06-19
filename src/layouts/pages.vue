<template lang="ja">
  <div>
    <LayoutsTheHeader />
    <nuxt />
  </div>
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
