<template>
  <main class="pages">
    <LayoutsNavBar :links="links" type="page" />
    <section class="inner">
      <div>
        <h1 class="title en">Collection of works</h1>
        <h2 class="sub-title">作品集</h2>
      </div>
    </section>
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
import { Links } from '@/components/layouts/NavBar.vue'

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
