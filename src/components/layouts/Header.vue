<template>
  <header :class="{ animation }">
    <div class="inner">
      <div>
        <nuxt-link to="/">
          <span>Hello Another World</span>
        </nuxt-link>
      </div>
      <div v-if="!colorUnShow" class="icon">
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
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext, PropType } from '#imports'

export default defineComponent({
  props: {
    animation: Boolean,
    colorUnShow: Boolean
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
