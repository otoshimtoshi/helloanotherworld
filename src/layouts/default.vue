<template>
  <div class="layout">
    <LayoutsHeader position="top" animation />
    <WebglMyCanvas :mode="colorMode" />
    <nuxt />
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  useContext
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const colorMode = computed(() => app.$colorMode.preference)

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

    return {
      colorMode
    }
  }
})
</script>
