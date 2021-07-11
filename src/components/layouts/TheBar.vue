<template>
  <div class="the-bar" :class="position">
    <template v-if="position === 'top'">
      <div class="the-bar__icon">
        <span
          class="color light"
          :class="$colorMode.preference === 'light' ? 'is-active' : ''"
          @click="changeColor('light')"
        />
        <span
          class="color yellow"
          :class="$colorMode.preference === 'yellow' ? 'is-active' : ''"
          @click="changeColor('yellow')"
        />
        <span
          class="color red"
          :class="$colorMode.preference === 'red' ? 'is-active' : ''"
          @click="changeColor('red')"
        />
        <span
          class="color blue"
          :class="$colorMode.preference === 'blue' ? 'is-active' : ''"
          @click="changeColor('blue')"
        />
        <span
          class="color green"
          :class="$colorMode.preference === 'green' ? 'is-active' : ''"
          @click="changeColor('green')"
        />
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
