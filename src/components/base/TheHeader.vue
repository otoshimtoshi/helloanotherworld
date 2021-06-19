<template>
  <div class="the-header">
    <div v-for="(link, index) in links" :key="index">
      <nuxt-link :to="link.path">
        <span>{{ link.text }}</span>
      </nuxt-link>
    </div>
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
