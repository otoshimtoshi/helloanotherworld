<template>
  <div class="the-bar" :class="position">
    <template v-if="position === 'top'">
      <div class="the-bar__icon">
        <div v-if="mode" class="haw-brightness_4" @click="changeColor('light')" />
        <div v-if="!mode" class="haw-brightness_high" @click="changeColor('dark')" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, PropType, computed } from '@nuxtjs/composition-api'

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

    const mode = computed(() => app.$colorMode.value === 'dark')

    const changeColor = (mode: string) => {
      app.$colorMode.value = mode
    }

    return {
      mode,
      changeColor
    }
  }
})
</script>
