<template>
  <div class="wrapper-page">
    <h2>
      <span>I'm a front-end developer working in Tokyo.</span>
    </h2>
    <div class="wrapper-page-content">
      <canvas id="myCanvas" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    onMounted(() => {
      require('@/script/index/Main');
    });
  }
});
</script>
