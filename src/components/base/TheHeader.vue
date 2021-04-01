<template>
  <div>
    <v-app-bar app :dark="$colorMode.value === 'dark'">
      <v-toolbar-title>
        <v-btn class="text-capitalize font-weight-bold" text nuxt to="/">
          <span>Hello Another World</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-for="(obj, index) in root" :key="index">
        <v-btn
          class="text-capitalize font-weight-bold"
          text
          nuxt
          :to="`/${obj.path}`"
        >
          <span>{{ obj.text }}</span>
        </v-btn>
      </div>
      <div>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      hide-overlay
      right
      app
      disable-route-watcher
      :dark="$colorMode.value === 'dark'"
    >
      <v-list dense>
        <v-divider></v-divider>
        <v-list-item>
          <v-col cols="12" class="py-2">
            <div>Color mode: {{ $colorMode.value }}</div>
            <v-btn-toggle v-model="$colorMode.preference">
              <v-btn value="light">
                <v-icon>mdi-white-balance-sunny</v-icon>
              </v-btn>
              <v-btn value="dark">
                <v-icon>mdi-weather-night</v-icon>
              </v-btn>
              <v-btn value="system">
                <v-icon>mdi-monitor</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      root: [
        {
          path: 'blog',
          text: 'Blog'
        },
        {
          path: 'who-me-are',
          text: 'Who Me Are'
        },
        {
          path: 'collection',
          text: 'Collection of Works'
        },
        {
          path: 'contact',
          text: 'Contact'
        }
      ],
      drawer: null
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
