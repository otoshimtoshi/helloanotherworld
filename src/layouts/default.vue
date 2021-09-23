<template>
  <div class="layout">
    <nuxt />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const setWindowSize = () => {
      const innerHeight = document.body.clientHeight
      const innerWidth = document.body.clientWidth
      document.body.setAttribute('width', `${innerWidth}px`)
      document.body.setAttribute('height', `${innerHeight}px`)
    }

    onMounted(() => {
      setWindowSize()
      window.addEventListener('resize', setWindowSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', setWindowSize)
    })
  }
})
</script>
