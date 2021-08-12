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
  reactive,
  toRefs,
  ref
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

    /** 各種フラグの初期化 */
    const initilize = () => {
      state.isOver = false
      state.isHome = false
      state.isMore = false
    }

    /** aタグ情報を格納 */
    const aTagEventElement = ref<any>() // eslint-disable-line

    /**
     * DOMのレンダリング後aタグを全て取得し取得タグのmousemove,mouseover,mouseoutイベント発火時
     * マウス座標を取得、ポインター座標へ取得座標を反映
     */
    onMounted(() => {
      window.addEventListener('mousemove', (e) => {
        state.mouseX = e.clientX
        state.mouseY = e.clientY
      })
      if (!aTagEventElement.value) {
        aTagEventElement.value = document.querySelectorAll('a')
      }
      for (let i = 0; i < aTagEventElement.value.length; i++) {
        //マウスホバー時
        aTagEventElement.value[i].addEventListener('mouseover', () => {
          state.isOver = true
        })
        //マウスホバー解除時
        aTagEventElement.value[i].addEventListener('mouseout', () => {
          initilize()
        })
      }
    })

    return {
      ...toRefs(state),
      transformPosition
    }
  }
})
</script>
