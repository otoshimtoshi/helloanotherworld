<template>
  <nav :class="route.name === 'index' ? '' : 'page'">
    <a href="https://otot.dev"
      >2022年2月28日をもってサイトを移転します。https://otot.dev</a
    >
  </nav>
</template>

<script setup lang="ts">
type Links = {
  path: string
  text: string
}

const route = useRoute()
</script>
