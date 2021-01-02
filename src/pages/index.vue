<template>
  <div class="wrapper-page">
    <h2>
      <span>I'm a front-end developer working in Tokyo.</span>
    </h2>
    <div class="wrapper-page-content">
      <canvas id="myCanvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import * as THREE from 'three/build/three.module';
import { Main } from '@/script/index/Main';

@Component({
  components: {},
})
export default class extends Vue {
  mounted() {
    require('@/script/index/Main');
  }
}
</script>
