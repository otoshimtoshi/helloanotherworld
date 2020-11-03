<template>
  <div>
    <div>Contact</div>
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
      title: 'Contact - HelloAnotherWorld',
    };
  }
}
</script>
