<template>
  <main>
    <div>Collection of works</div>
    <div>作品集</div>
    <LayoutsTheLinkArea :links="links" type="page" />
    <Pointer />
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  reactive,
  toRefs,
  useMeta,
  computed
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/TheLinkArea.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('collection'),
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

    useMeta(() => ({
      title: state.metaInfo?.title,
      meta: state.metaInfo?.meta
    }))

    const links = computed(() => {
      return state.allLink.filter((link) => link.path !== route.value.path)
    })

    return {
      ...toRefs(state),
      links
    }
  },
  // @ts-ignore
  head() {}
})
</script>
