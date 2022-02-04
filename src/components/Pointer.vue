<template>
  <div class="pointer">
    <div
      class="pointer-outer"
      :class="{ 'pointer-isover': state.isOver }"
      :style="transformPosition"
    ></div>
    <div
      class="pointer-inner"
      :class="{ 'pointer-isover': state.isOver }"
      :style="transformPosition"
    ></div>
  </div>
</template>
<script setup lang="ts">
const state = reactive({
  mouseX: 0,
  mouseY: 0,
  isOver: false
})

/** マウス表示位置制御 */
const transformPosition = computed(() => {
  return (
    'transform: translate3d(' +
    state.mouseX +
    'px, ' +
    state.mouseY +
    'px, ' +
    '0px)'
  )
})

/** mousemoveイベントでマウス箇所を移動 */
const setMousePosition = (e: MouseEvent) => {
  state.mouseX = e.clientX
  state.mouseY = e.clientY
}

/** リスナーのセット */
onMounted(() => {
  window.addEventListener('mousemove', setMousePosition, { passive: true })
})

/** リスナーのアンセット */
onUnmounted(() => {
  window.removeEventListener('mousemove', setMousePosition)
})
</script>
