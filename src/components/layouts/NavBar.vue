<template>
  <nav :class="path === 'index' ? '' : 'page'">
    <ul class="links" :class="path === 'index' ? '' : 'page'">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="link"
        :class="path === 'index' ? '' : 'page'"
      >
        <nuxt-link
          :to="`${link.path}/`"
          class="link-text"
          :class="[
            path === 'index' ? '' : 'page',
            `${link.path}/` === currentRoutePath ? 'line-through' : ''
          ]"
        >
          <span>{{ link.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
export type Links = {
  path: string
  text: string
}

export type PageType = 'index' | 'page'

const { path } = useRoute()
const links = reactive<Array<Links>>([
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
])

const currentRoutePath = computed(() => path)
</script>
