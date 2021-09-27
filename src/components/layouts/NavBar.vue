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
          :to="link.path"
          class="link__text"
          :class="type === 'index' ? '' : 'page'"
        >
          <span>{{ link.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export type Links = {
  path: string
  text: string
}

export type PageType = 'index' | 'page'

export default defineComponent({
  props: {
    links: {
      type: Array as PropType<Array<Links>>,
      default: []
    },
    type: {
      type: String as PropType<PageType>,
      default: 'index'
    }
  },
  setup() {}
})
</script>
