<template>
  <main>
    <div v-if="error.statusCode === 404">
      <h1>ERROR 404</h1>
      <h2>Page Can Not Be Found!</h2>
    </div>
    <div v-else>
      <h1>An Error Has Occurred!</h1>
    </div>
    <LayoutsNavBar :links="allLink" />
    <Pointer />
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/NavBar.vue'

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
  setup: () => {
    const state = reactive({
      allLink: [
        {
          path: '/',
          text: 'Top'
        },
        {
          path: '/who-i-am',
          text: 'Who I Am'
        },
        {
          path: '/collection',
          text: 'Collection of Works'
        },
        {
          path: '/contact',
          text: 'Contact'
        }
      ] as Array<Links>
    })

    return {
      ...toRefs(state)
    }
  }
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
