<template>
  <div class="layout">
    <LayoutsHeader animation />
    <LayoutsNavBar :type="navBarType" />
    <WebglMyCanvas :render-text="renderText" />
    <nuxt />
    <LayoutsFooter />
  </div>
</template>

<script setup lang="ts">
const { path } = useRoute()

const setWindowSize = () => {
  const innerHeight = window.innerHeight
  const innerWidth = window.innerWidth
  document.body.setAttribute('width', `${innerWidth}px`)
  document.body.setAttribute('height', `${innerHeight}px`)
}

const navBarType = computed(() => {
  if (path === 'index') {
    return 'index'
  } else {
    return 'page'
  }
})

const renderText = computed(() => {
  switch (path) {
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
