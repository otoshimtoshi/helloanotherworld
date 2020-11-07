<template>
  <div class="wrapper-page">
    <h2>
      <span>I'm a front-end developer working in Tokyo.</span>
    </h2>
    <div class="wrapper-page-content">
      <model-obj src="@/assets/model/tree.obj"></model-obj>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ModelObj } from 'vue-3d-model';

@Component({
  components: {},
})
export default class extends Vue {}
</script>
