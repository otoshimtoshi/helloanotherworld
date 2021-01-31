<template>
  <div id="myCanvas2" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  ref
} from '@nuxtjs/composition-api';
import * as THREE from 'three';
import { LoadingManager } from 'three';
import OBJLoader from 'three-obj-loader';

export default defineComponent({
  setup() {
    const state = reactive({
      fov: 75,
      width: 300,
      height: 300,
      near: 0.1,
      far: 1000
    });
    const manager = new LoadingManager();
    const objLoader = new OBJLoader(manager);
    console.log(objLoader);
    const scene = ref(new THREE.Scene());
    const camera = ref(
      new THREE.PerspectiveCamera(
        state.fov,
        state.width / state.height,
        state.near,
        state.far
      )
    );

    const renderer = ref<THREE.WebGLRenderer>();

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('myCanvas2');
      renderer.value = new THREE.WebGLRenderer({
        antialias: true,
        div: element,
        alpha: true
      });
      if (element !== null) {
        state.width = element.clientWidth;
        state.height = element.clientWidth / 2;
      }
      renderer.value.setSize(state.width, state.height);
      element.appendChild(renderer.value.domElement);
    });

    return {
      state,
      scene,
      camera,
      renderer,
      objLoader
    };
  }
});
</script>
