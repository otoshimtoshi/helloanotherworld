<template>
  <div id="myCanvas2" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  ref
} from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { LoadingManager } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      fov: 75,
      width: 300,
      height: 300,
      near: 0.9,
      far: 1000
    })
    const scene = ref(new THREE.Scene())
    // scene.value.background = new THREE.Color().setHSL(1, 1, 1);
    // scene.value.fog = new THREE.Fog(scene.value.background, 1, 5000);
    const camera = ref(
      new THREE.PerspectiveCamera(
        state.fov,
        state.width / state.height,
        state.near,
        state.far
      )
    )
    camera.value.position.set(0, -10, 55)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2)
    hemiLight.position.set(0, 50, 0)
    scene.value.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9)
    dirLight.position.set(-10, 28, 10)
    dirLight.position.multiplyScalar(10)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 2048
    dirLight.shadow.mapSize.height = 2048
    scene.value.add(dirLight)

    const manager = new LoadingManager()
    const objLoader = new OBJLoader(manager)
    const renderer = ref<THREE.WebGLRenderer>()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('myCanvas2')
      renderer.value = new THREE.WebGLRenderer({
        antialias: true,
        div: element,
        alpha: true
      })
      if (element !== null) {
        state.width = element.clientWidth
        state.height = element.clientWidth / 2
      }
      renderer.value.setSize(state.width, state.height)
      renderer.value.shadowMap.enabled = true
      objLoader.load(
        props.src,
        (obj) => {
          scene.value.add(obj)
        },
        (xhr) => {
          onProgress(xhr)
        },
        (err) => {
          onError(err)
        }
      )
      element.appendChild(renderer.value.domElement)
      animate()
    })

    function onProgress(xhr) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100
        console.log('model ' + Math.round(percentComplete, 2) + '% downloaded')
      }
    }
    function onError(err) {
      console.log(err)
      throw new Error(`objLoader error ${err}`)
    }

    const animate = () => {
      renderer.value.render(scene.value, camera.value)
      requestAnimationFrame(animate)
    }

    return {
      state,
      scene,
      camera,
      renderer
    }
  }
})
</script>
