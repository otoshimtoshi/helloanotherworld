<template>
  <main>{{ id }}</main>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { app, params } = useContext()
    const state = reactive({})

    const id = computed(() => params.value.id)

    return {
      ...toRefs(state),
      id
    }
  }
})
</script>
