<template lang="ja">
  <div id="wrapper" class="wrapper">
    <BaseTheHeader />
    <nuxt />
    <BaseTheFooter />
    <BaseThePointer />
  </div>
</template>
<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const state = {
      store: app.store.state
    }
    return {
      state
    }
  }
})
</script>
