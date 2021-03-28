<template>
  <v-app-bar app color="white" flat>
    <v-toolbar-title>
      <v-btn
        class="text-capitalize font-weight-bold blue-grey--text darken-4"
        text
        nuxt
        to="/"
      >
        <span>Hello Another World</span>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div>
      <v-btn
        class="text-capitalize font-weight-bold blue-grey--text darken-4"
        text
        nuxt
        to="/blog"
      >
        <span>Blog</span>
      </v-btn>
    </div>
    <div>
      <v-btn
        class="text-capitalize font-weight-bold blue-grey--text darken-4"
        text
        nuxt
        to="/who-me-are"
      >
        <span>Who Me Are</span>
      </v-btn>
    </div>
    <div>
      <v-btn
        class="text-capitalize font-weight-bold blue-grey--text darken-4"
        text
        nuxt
        to="/collection"
      >
        <span>Collection of Works</span>
      </v-btn>
    </div>
    <div>
      <v-btn
        class="text-capitalize font-weight-bold blue-grey--text darken-4"
        text
        nuxt
        to="/contact"
      >
        <span>Contact</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {}
})
</script>
