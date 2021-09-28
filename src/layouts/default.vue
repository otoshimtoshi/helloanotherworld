<template>
  <div class="layout">
    <LayoutsHeader animation />
    <LayoutsNavBar :type="navBarType" />
    <WebglMyCanvas :mode="colorMode" :render-text="renderText" />
    <nuxt />
    <LayoutsFooter />
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
    const { app, route } = useContext()
    const colorMode = computed(() => app.$colorMode.preference)

    const setWindowSize = () => {
      const innerHeight = window.innerHeight
      const innerWidth = window.innerWidth
      document.body.setAttribute('width', `${innerWidth}px`)
      document.body.setAttribute('height', `${innerHeight}px`)
    }

    const currentRouteName = computed(() => route.value.name)

    const navBarType = computed(() => {
      if (route.value.name === 'index') {
        return 'index'
      } else {
        return 'page'
      }
    })

    const renderText = computed(() => {
      switch (currentRouteName.value) {
        case 'index':
          return 'Hello  Another World'
        case 'who-i-am':
          return 'Who  I  Am'
        case 'collection':
          return 'Collection  Of  Works'
        case 'contact':
          return 'Contact'
        default:
          return ''
      }
    })

    onMounted(() => {
      setWindowSize()
      window.addEventListener('resize', setWindowSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', setWindowSize)
    })

    return {
      colorMode,
      currentRouteName,
      renderText,
      navBarType
    }
  }
})
</script>
