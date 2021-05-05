<template>
  <v-footer class="text-center" padless :dark="$colorMode.value === 'dark'">
    <v-col class="text-center text-sm-body-2" cols="12">
      <strong>
        Copyright©{{ new Date().getFullYear() }} HelloAnotherWorld All Rights
        Reserved.
      </strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  useContext,
  toRefs
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { route } = useContext()
    const state = reactive({
      fixed: computed(() => route.value.name === 'blog')
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
