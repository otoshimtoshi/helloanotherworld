<template>
  <footer>
    <div class="inner">
      <template v-if="info">
        <div class="collection">
          <div class="title">
            <span>{{ info.title }}</span>
          </div>
          <div class="description">
            <span>{{ info.description }}</span>
          </div>
          <div class="content">
            <span>Created:</span>
            <span>{{ info.created_date || '-' }}</span>
            <span>Updated:</span>
            <span>{{ info.updated_date || '-' }}</span>
          </div>
        </div>
      </template>
      <span>©</span>
      <span>2021</span>
      <span class="en">Hello Another World</span>
    </div>
  </footer>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  toRefs,
  useContext
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { app, params } = useContext()
    const state = reactive({
      info: app.store.getters.getCollectionInfo(params.value.id)
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>
