<template>
  <div>
    <div>Collection of works</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  head() {
    return {
      title: 'Collection of works - HelloAnotherWorld',
    };
  }
}
</script>
