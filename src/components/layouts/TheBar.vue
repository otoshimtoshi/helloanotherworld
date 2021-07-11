<template>
  <div class="the-bar" :class="position">
    <template v-if="position === 'top'">
      <div class="the-bar__icon">
        <span class="color light" @click="changeColor('light')" />
        <span class="color yellow" @click="changeColor('yellow')" />
        <span class="color red" @click="changeColor('red')" />
        <span class="color blue" @click="changeColor('blue')" />
        <span class="color green" @click="changeColor('green')" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, PropType } from '@nuxtjs/composition-api'

export type Position = 'top' | 'bottom' | 'center' | 'left' | 'right'

export default defineComponent({
  props: {
    position: {
      type: String as PropType<Position>,
      default: 'top'
    }
  },
  setup() {
    const { app } = useContext()
    const changeColor = (mode: string) => {
      app.$colorMode.preference = mode
    }

    return {
      changeColor
    }
  }
})
</script>
