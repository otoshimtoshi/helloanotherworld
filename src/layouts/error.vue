<template>
  <div class="error">
    <LayoutsTheBar position="top" />
    <h1>{{ message.main }}</h1>
    <LayoutsTheLinkArea :links="allLink" />
    <LayoutsTheBar position="bottom" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  toRefs
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/TheLinkArea.vue'

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
  setup: (props) => {
    const state = reactive({
      allLink: [
        {
          path: '/',
          text: 'Top'
        },
        {
          path: '/who-me-are',
          text: 'Who Me Are'
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

    const message = computed(() => {
      switch (props.error.statusCode) {
        case 404:
          return {
            main: 'Page Can Not Be Found!'
          }
        default:
          return {
            main: 'An Error Has Occurred!'
          }
      }
    })

    return {
      ...toRefs(state),
      message
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
