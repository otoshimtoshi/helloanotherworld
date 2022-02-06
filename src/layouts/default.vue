<template>
  <div class="layout">
    <LayoutsHeader animation />
    <LayoutsNavBar :type="navBarType" />
    <WebglMyCanvas :mode="colorMode" :render-text="renderText" />
    <nuxt />
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '~~/src/composable/useColorMode'

const { colorMode } = useColorMode()
const route = useRoute()

const setWindowSize = () => {
  const innerHeight = window.innerHeight
  const innerWidth = window.innerWidth
  document.body.setAttribute('width', `${innerWidth}px`)
  document.body.setAttribute('height', `${innerHeight}px`)
}

const navBarType = computed(() => {
  if (route.name === 'index') {
    return 'index'
  } else {
    return 'page'
  }
})

const renderText = computed(() => {
  switch (route.name) {
    case 'index':
      return 'Hello  Another World'
    case 'who_i_am':
      return 'Who  I  Am'
    case 'collection':
      return 'Collection'
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
</script>
