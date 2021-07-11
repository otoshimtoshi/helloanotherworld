<template>
  <div class="layout-default">
    <LayoutsTheBar position="top" />
    <LayoutsTheHeader />
    <LayoutsTheLinkArea :links="links" type="index" />
    <div class="main">
      <nuxt />
    </div>
    <LayoutsTheBar position="bottom" />
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

    return {
      ...toRefs(state),
      links
    }
  }
})
</script>
