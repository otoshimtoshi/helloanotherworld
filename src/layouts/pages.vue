<template>
  <div class="layout-pages">
    <LayoutsTheBar position="top" />
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs, useContext } from '@nuxtjs/composition-api'
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

    const links = computed(() => {
      return state.allLink.filter((link) => link.path !== route.value.path)
    })

    const colorMode = computed(() => app.$colorMode.value)

    return {
      ...toRefs(state),
      links,
      colorMode
    }
  }
})
</script>
