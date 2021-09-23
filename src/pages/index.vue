<template>
  <div>
    <main>
      <div class="top">
        <div class="top__inner">
          <h1>
            <span class="top__title">Hello Another World</span>
          </h1>
          <h2>
            <span class="top__sub-title line-through">designer</span>
            <span class="top__sub-title">|</span>
            <span class="top__sub-title">developer</span>
            <span class="top__sub-title">|</span>
            <span class="top__sub-title line-through">derector</span>
          </h2>
        </div>
      </div>
      <LayoutsTheLinkArea :links="links" type="index" />
      <WebglGltfViewer
        :load-percent="loadPercent"
        src="/logo2.glb"
        :mode="colorMode"
        @update:load-percent="updatePercent"
      />
    </main>
    <Pointer />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useContext,
  toRefs,
  useMeta,
  computed
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/TheLinkArea.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      main: (null as unknown) as HTMLDivElement,
      loadPercent: 0,
      metaInfo: app.store.getters.getMetaInfo('index'),
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

    const colorMode = computed(() => app.$colorMode.preference)

    const updatePercent = (num: number) => {
      state.loadPercent = num
    }

    const links = computed(() => {
      return state.allLink.filter((link) => link.path !== route.value.path)
    })

    return {
      ...toRefs(state),
      colorMode,
      updatePercent,
      links
    }
  },
  // @ts-ignore
  head() {}
})
</script>
