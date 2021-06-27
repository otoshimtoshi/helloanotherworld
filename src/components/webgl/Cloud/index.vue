<template>
  <div id="cloud" />
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise'
import fragmentShader from './fragmentShader.frag'
import vertexShader from './vertexShader.vert'
import { isWebGLAvailable } from '@/composable/use-webgl2-available'

export default defineComponent({
  setup() {
    isWebGLAvailable()
    const state = reactive({
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(),
      texture: new THREE.DataTexture3D(new Uint8Array(1), 1, 1, 1),
      mesh: new THREE.Mesh()
    })

    const renderer = ref<THREE.WebGLRenderer>()

    const init = () => {}
    init()

    /** 空 */
    const createSky = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 32
      const context = canvas.getContext('2d')
      if (context === null) return
      const gradient = context.createLinearGradient(0, 0, 0, 32)
      gradient.addColorStop(0.0, '#014a84')
      gradient.addColorStop(0.5, '#0561a0')
      gradient.addColorStop(1.0, '#437ab6')
      context.fillStyle = gradient
      context.fillRect(0, 0, 1, 32)
      const sky = new THREE.Mesh(
        new THREE.SphereGeometry(10),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), side: THREE.BackSide })
      )
      state.scene.add(sky)
    }

    /** Texture */
    const createTexture = () => {
      const size = 128
      const data = new Uint8Array(size * size * size)

      let i = 0
      const scale = 0.05
      const perlin = new ImprovedNoise()
      const vector = new THREE.Vector3()

      for (let z = 0; z < size; z++) {
        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            const d =
              1.0 -
              vector
                .set(x, y, z)
                .subScalar(size / 2)
                .divideScalar(size)
                .length()
            data[i] =
              (128 + 128 * perlin.noise((x * scale) / 1.5, y * scale, (z * scale) / 1.5)) * d * d
            i++
          }
        }
      }
      state.texture = new THREE.DataTexture3D(data, size, size, size)
      state.texture.format = THREE.RedFormat
      state.texture.minFilter = THREE.LinearFilter
      state.texture.magFilter = THREE.LinearFilter
      state.texture.unpackAlignment = 1
    }

    const createMaterial = () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.RawShaderMaterial({
        glslVersion: THREE.GLSL3,
        uniforms: {
          base: { value: new THREE.Color(0x798aa0) },
          map: { value: state.texture },
          cameraPos: { value: new THREE.Vector3() },
          threshold: { value: 0.25 },
          opacity: { value: 0.25 },
          range: { value: 0.1 },
          steps: { value: 100 },
          frame: { value: 0 }
        },
        vertexShader,
        fragmentShader,
        side: THREE.BackSide,
        transparent: true
      })

      state.mesh = new THREE.Mesh(geometry, material)
      state.scene.add(state.mesh)
    }

    onMounted(() => {
      createSky()
      createTexture()
      createMaterial()
      const element: HTMLElement | null = document.getElementById('cloud')
      if (element === null) return
      renderer.value = new THREE.WebGLRenderer()
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      )
      state.camera.position.set(0, 0, 1.5)
      const controls = new OrbitControls(state.camera, renderer.value.domElement)
      controls.enablePan = false
      controls.enableZoom = false

      animate()
      window.addEventListener('resize', onWindowResize)
    })

    function onWindowResize() {
      state.camera.aspect = window.innerWidth / window.innerHeight
      state.camera.updateProjectionMatrix()
      if (renderer.value === undefined) return
      renderer.value.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      state.mesh.rotation.y = -performance.now() / 7500
      if (renderer.value === undefined) return
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
