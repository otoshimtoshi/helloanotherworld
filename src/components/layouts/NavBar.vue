<template>
  <nav :class="route.name === 'index' ? '' : 'page'">
    <ul class="links" :class="route.name === 'index' ? '' : 'page'">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="link"
        :class="route.name === 'index' ? '' : 'page'"
      >
        <nuxt-link
          :to="link.path"
          class="link-text"
          :class="[
            route.name === 'index' ? '' : 'page',
            link.path === route.path ? 'line-through' : ''
          ]"
        >
          <span>{{ link.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type Links = {
  path: string
  text: string
}

const route = useRoute()
const links = reactive<Array<Links>>([
  {
    path: '/who_i_am/',
    text: 'Who I Am'
  },
  {
    path: '/collection/',
    text: 'Collection'
  },
  {
    path: '/contact/',
    text: 'Contact'
  }
])
</script>
