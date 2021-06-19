<template>
  <div class="layout-default">
    <LayoutsTheBar position="top" />
    <div>
      <LayoutsTheHeader />
      <LayoutsTheLinkArea :links="links" />
      <nuxt />
    </div>
    <LayoutsTheBar position="bottom" />
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/TheLinkArea.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      store: app.store.state,
      colorMode: app.$colorMode,
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

    const links = computed(() => {
      return state.allLink.filter((link) => link.path !== route.value.path)
    })

    const changeColor = (mode: string) => {
      app.$colorMode.preference = mode
    }

    return {
      ...toRefs(state),
      links,
      changeColor
    }
  }
})
</script>
