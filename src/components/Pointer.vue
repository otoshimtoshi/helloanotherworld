<template>
  <div class="pointer">
    <div class="pointer_outer" :class="{ pointer_isover: isOver }" :style="transformPosition"></div>
    <div class="pointer_inner" :class="{ pointer_isover: isOver }" :style="transformPosition"></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      mouseX: 0,
      mouseY: 0,
      isOver: false,
      isHome: false,
      isMore: false
    })

    /** マウス表示位置制御 */
    const transformPosition = computed(() => {
      return 'transform: translate3d(' + state.mouseX + 'px, ' + state.mouseY + 'px, ' + '0px)'
    })

    const setMousePosition = (e: MouseEvent) => {
      state.mouseX = e.clientX
      state.mouseY = e.clientY
    }

    onMounted(() => {
      window.addEventListener('mousemove', setMousePosition, { passive: true })
    })

    onUnmounted(() => {
      window.removeEventListener('mousemove', setMousePosition)
    })

    return {
      ...toRefs(state),
      transformPosition
    }
  }
})
</script>
