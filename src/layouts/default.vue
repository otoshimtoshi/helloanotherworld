<template lang="ja">
  <div id="wrapper" class="wrapper">
    <BaseTheHeader />
    <nuxt />
    <BaseTheFooter />
    <BaseThePointer />
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
