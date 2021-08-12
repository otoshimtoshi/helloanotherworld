<template>
  <div>
    <div v-if="!loading" class="loading">
      <span class="horizontal-line" />
      <span class="vertical-line" />
      <div class="box">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
    <div v-if="loading">
      <LayoutsTheBar v-if="loading" position="top" />
      <LayoutsTheHeader />
      <LayoutsTheLinkArea :links="links" type="index" />
      <div class="main">
        <WebglGltfViewer
          :load-percent="loadPercent"
          src="/logo.glb"
          :mode="colorMode"
          @update:load-percent="updatePercent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useContext,
  toRefs,
  useMeta,
  computed,
  onMounted
} from '@nuxtjs/composition-api'
import { Links } from '@/components/layouts/TheLinkArea.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      main: (null as unknown) as HTMLDivElement,
      loading: false,
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

    onMounted(() => {
      setTimeout(() => {
        state.loading = true
      }, 1000)
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
