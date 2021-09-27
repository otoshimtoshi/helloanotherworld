<template>
  <main class="pages">
    <LayoutsNavBar :links="links" type="page" />
    <section class="inner">
      <div>
        <h1 class="title en">Contact</h1>
        <h2 class="sub-title">お問い合わせ</h2>
      </div>
      <div class="content">
        <div>フォームのご用意ができておりません。</div>
        <div>
          <span>ご依頼・ご相談がありましたら</span>
          <a href="mailto:info@helloanotherworld.com" target="_blank">メール</a>
          <span>までご連絡ください。</span>
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
import { Links } from '@/components/layouts/NavBar.vue'

export default defineComponent({
  setup() {
    const { app, route } = useContext()
    const state = reactive({
      metaInfo: app.store.getters.getMetaInfo('contact'),
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
