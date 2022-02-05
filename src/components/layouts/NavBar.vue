<template>
  <nav :class="type === 'index' ? '' : 'page'">
    <ul class="links" :class="type === 'index' ? '' : 'page'">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="link"
        :class="type === 'index' ? '' : 'page'"
      >
        <nuxt-link
          :to="`${link.path}/`"
          class="link__text"
          :class="[
            type === 'index' ? '' : 'page',
            `${link.path}/` === currentRoutePath ? 'line-through' : ''
          ]"
        >
          <span>{{ link.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'

export type Links = {
  path: string
  text: string
}

export type PageType = 'index' | 'page'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<PageType>,
      default: 'index'
    }
  },
  setup() {
    const { route } = useContext()
    const state = reactive({
      links: [
        {
          path: '/who_i_am',
          text: 'Who I Am'
        },
        {
          path: '/collection',
          text: 'Collection'
        },
        {
          path: '/contact',
          text: 'Contact'
        }
      ] as Array<Links>
    })

    const currentRoutePath = computed(() => route.value.path)

    return {
      ...toRefs(state),
      currentRoutePath
    }
  }
})
</script>
