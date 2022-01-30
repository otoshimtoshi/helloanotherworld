<template>
  <header class="animation">
    <div class="inner">
      <div>
        <nuxt-link to="/">
          <span>Hello Another World</span>
        </nuxt-link>
      </div>
      <div class="icon">
        <span
          class="color light"
          :class="currentMode === 'light' ? 'is-active' : ''"
          @click="changeColor('light')"
        />
        <span
          class="color yellow"
          :class="currentMode === 'yellow' ? 'is-active' : ''"
          @click="changeColor('yellow')"
        />
        <span
          class="color red"
          :class="currentMode === 'red' ? 'is-active' : ''"
          @click="changeColor('red')"
        />
        <span
          class="color blue"
          :class="currentMode === 'blue' ? 'is-active' : ''"
          @click="changeColor('blue')"
        />
        <span
          class="color green"
          :class="currentMode === 'green' ? 'is-active' : ''"
          @click="changeColor('green')"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useColorMode } from '~~/src/composable/useColorMode'

const { getMode, changeMode } = useColorMode()
const currentMode = getMode()
const changeColor = (mode: string) => {
  changeMode(mode)
}
</script>
