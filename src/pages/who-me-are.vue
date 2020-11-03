<template>
  <div class="wrapper-page">
    <div>Who me are</div>
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
      title: 'Who me are - HelloAnotherWorld',
    };
  }
}
</script>
