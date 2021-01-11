<template>
  <div class="wrapper-page">
    <h2>
      <span>I'm a front-end developer working in Tokyo.</span>
    </h2>
    <div class="wrapper-page-content">
      <div class="grid">
        <div class="item1">
          <div id="myCanvas" />
        </div>
        <div class="item2"></div>
        <div class="item3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  ref
} from '@nuxtjs/composition-api';
import * as THREE from 'three';

export default defineComponent({
  setup() {
    const state = reactive({
      fov: 75,
      width: 300,
      height: 300,
      near: 0.1,
      far: 1000
    });
    const scene = ref(new THREE.Scene());
    const camera = ref(
      new THREE.PerspectiveCamera(
        state.fov,
        state.width / state.height,
        state.near,
        state.far
      )
    );
    camera.value.position.set(20, 20, 20);
    camera.value.lookAt(new THREE.Vector3(0, 0, 0));

    // 三角錐
    const geometry = ref(new THREE.TetrahedronBufferGeometry(12, 0));
    const material = ref(new THREE.MeshStandardMaterial({ color: 0xffffff }));
    // メッシュを作成
    const mesh = ref(new THREE.Mesh(geometry.value, material.value));
    mesh.value.receiveShadow = true;
    // 3D空間にメッシュを追加
    scene.value.add(mesh.value);
    // 平行光源
    const light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(100, 1500, 200);
    light.castShadow = true;
    // シーンに追加
    scene.value.add(light);

    const renderer = ref<THREE.WebGLRenderer>();

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('myCanvas');
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
      renderer.value.shadowMap.enabled = true;
      element.appendChild(renderer.value.domElement);
      animate();
    });

    const animate = () => {
      mesh.value.rotation.x += 0.01;
      mesh.value.rotation.y += 0.01;
      renderer.value.render(scene.value, camera.value);
      requestAnimationFrame(animate);
    };

    return {
      state,
      scene,
      camera,
      renderer
    };
  }
});
</script>
<style lang="scss" scoped>
.grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 100px;
  grid-template-columns: minmax(180px, 300px) 2fr;
  .item1 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .item2 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  .item3 {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
}
</style>
