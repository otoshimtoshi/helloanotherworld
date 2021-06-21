<template>
  <div id="frame" />
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import fragmentShader from '@/components/glsl/frameObject.frag'
import vertexShader from '@/components/glsl/frameObject.vert'

export default defineComponent({
  setup() {
    const state = reactive({
      uniforms: {
        time: {
          type: 'f',
          value: 0
        },
        resolution: {
          type: 'v2',
          value: new THREE.Vector2()
        }
      },
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      clock: new THREE.Clock(),
      geometry: new THREE.BufferGeometry(),
      vertices: new Float32Array([
        0,
        Math.sqrt(3) / 2,
        0,
        -1,
        (Math.sqrt(3) / 2) * -1,
        0,
        1,
        (Math.sqrt(3) / 2) * -1,
        0
      ]),
      indices: new Uint16Array([0, 1, 2, 0])
    })

    const renderer = ref<THREE.WebGLRenderer>()

    const init = () => {
      state.geometry.setAttribute('position', new THREE.BufferAttribute(state.vertices, 3))
      state.geometry.setIndex(new THREE.BufferAttribute(state.indices, 1))
      const line = new THREE.Line(
        state.geometry,
        new THREE.RawShaderMaterial({
          uniforms: state.uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader
        })
      )
      state.scene.add(line)
    }
    init()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('frame')
      if (element === null) return
      renderer.value = new THREE.WebGLRenderer({
        alpha: true
      })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      element.appendChild(renderer.value.domElement)
      animate()
      window.addEventListener('resize', onWindowResize)
    })

    function onWindowResize() {
      if (renderer.value === undefined) return
      state.camera.aspect = window.innerWidth / window.innerHeight
      state.camera.updateProjectionMatrix()
      renderer.value.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      if (renderer.value === undefined) return
      const elapsedTime = state.clock.getElapsedTime()
      state.scene.rotation.x = elapsedTime * 0.05
      state.scene.rotation.y = elapsedTime * 0.04
      state.scene.rotation.z = elapsedTime * 0.03
      renderer.value.render(state.scene, state.camera)
    }

    return {
      ...toRefs(state),
      renderer
    }
  }
})
</script>
<style lang="scss" scoped>
.trails {
  position: fixed;
  z-index: 100;
  pointer-events: none;
}
</style>
