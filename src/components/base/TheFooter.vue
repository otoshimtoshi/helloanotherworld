<!-- Footerコンポーネント -->
<template>
  <footer class="footer" :style="fixed ? 'position: relative;' : ''">
    <address>Copyright©2020 HelloAnotherWorld All Rights Reserved.</address>
  </footer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useContext,
  toRefs
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { route } = useContext()
    const state = reactive({
      fixed: computed(() => route.value.name === 'blog')
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
