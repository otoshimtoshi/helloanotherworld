<template>
  <div class="layout">
    <LayoutsHeader animation colorUnShow />
    <nuxt />
    <LayoutsFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from '#imports'

export default defineComponent({
  setup() {
    const setWindowSize = () => {
      const innerHeight = window.innerHeight
      const innerWidth = window.innerWidth
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
