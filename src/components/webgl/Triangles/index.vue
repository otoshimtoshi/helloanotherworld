<template>
  <div id="ground" />
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs, ref } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import fragmentShader from './fragmentShader.frag'
import vertexShader from './vertexShader.vert'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'light'
    }
  },
  setup() {
    const state = reactive({
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      mesh: new THREE.Mesh()
    })

    const renderer = ref<THREE.WebGLRenderer>()

    const init = () => {
      // scene
      state.scene.background = new THREE.Color(0xe6e7e8)
      const vertexCount = 10

      const geometry = new THREE.BufferGeometry()

      const positions = []
      const colors = []

      for (let i = 0; i < vertexCount; i++) {
        // adding x,y,z
        positions.push(Math.random() - 0.5)
        positions.push(Math.random() - 0.5)
        positions.push(Math.random() - 0.5)

        // adding r,g,b,a
        colors.push(Math.random() * 255)
        colors.push(Math.random() * 255)
        colors.push(Math.random() * 255)
        colors.push(Math.random() * 255)
      }

      const positionAttribute = new THREE.Float32BufferAttribute(positions, 3)
      const colorAttribute = new THREE.Uint8BufferAttribute(colors, 4)

      colorAttribute.normalized = true // this will map the buffer values to 0.0f - +1.0f in the shader

      geometry.setAttribute('position', positionAttribute)
      geometry.setAttribute('color', colorAttribute)

      // material

      const material = new THREE.RawShaderMaterial({
        uniforms: {
          time: {
            value: 0
          },
          resolution: {
            value: new THREE.Vector2()
          }
        },
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
        transparent: true
      })

      const mesh = new THREE.Mesh(geometry, material)
      state.scene.add(mesh)
    }
    init()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('ground')
      if (element === null) return
      renderer.value = new THREE.WebGLRenderer({ antialias: true })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      renderer.value.outputEncoding = THREE.sRGBEncoding
      renderer.value.shadowMap.enabled = true
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10)
      state.camera.position.set(0, 0, 0)
      state.camera.position.z = 2

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
      const time = performance.now()

      const object = state.scene.children[0]

      object.rotation.y = time * 0.0005
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
