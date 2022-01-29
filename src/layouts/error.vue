<template>
  <main class="pages">
    <LayoutsNavBar />
    <section class="inner">
      <div v-if="error.statusCode === 404">
        <h1>ERROR 404</h1>
        <h2>Page Can Not Be Found!</h2>
      </div>
      <div v-else>
        <h1>An Error Has Occurred!</h1>
      </div>
    </section>
    <Pointer />
  </main>
</template>

<script lang="ts">
import { defineComponent, PropType } from '#imports'

interface ErrorProp {
  message: string
  statusCode: number
}

export default defineComponent({
  layout: 'error',
  props: {
    error: {
      type: Object as PropType<ErrorProp>,
      required: true
    }
  },
  setup: () => {}
})
</script>

<style lang="scss" scoped>
.error {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecf2fa;
}
.dark-mode {
  .error {
    background-color: #030b13;
  }
}
</style>
