<template>
  <main class="pages">
    <LayoutsTheLinkArea :links="links" type="page" />
    <section class="inner">
      <div>
        <h1 class="title">Who i am</h1>
      </div>
      <div class="content en">
        <div>Hi! My name is Masatoshi Otoshi.</div>
        <div>I'm a front-end developer based in Tokyo.</div>
        <div>Please contact me via DM on SNS.</div>
      </div>
    </section>
    <section class="inner">
      <div>
        <h2 class="sub-title">自己紹介</h2>
      </div>
      <div class="content">
        <div>落司 聖稔(おとし まさとし)</div>
        <div>東京でフロントエンドディベロッパーとして活動しています。</div>
        <div>
          <span class="en">Github</span>や<span class="en">Twitter</span
          >でご連絡ください。
        </div>
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
import { Links } from '@/components/layouts/TheLinkArea.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('who-i-am'),
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
