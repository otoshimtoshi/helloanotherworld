<template>
  <div class="the-link-area">
    <ul
      v-for="(link, index) in links"
      :key="index"
      class="the-link-area__links"
    >
      <li class="the-link-area__link">
        <nuxt-link :to="link.path" class="the-link-area__link__text">
          <span>{{ link.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export type Links = {
  path: string
  text: string
}

export default defineComponent({
  props: {
    links: {
      type: Array as PropType<Array<Links>>,
      default: []
    }
  },
  setup() {}
})
</script>
