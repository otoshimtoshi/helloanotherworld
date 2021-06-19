<template lang="ja">
  <div>
    <BaseTheHeader :links="links"/>
    <nuxt />
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
import { Links } from '@/components/base/TheHeader.vue'

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
          path: '/blog',
          text: 'Blog'
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

    return {
      ...toRefs(state),
      links
    }
  }
})
</script>
