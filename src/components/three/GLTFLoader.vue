<template>
  <div id="three-gltf" class="canvas" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  ref,
  toRefs
} from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      hemiLight: new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2),
      dirLight: new THREE.DirectionalLight(0xffffff, 0.9),
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0
    })

    state.camera.position.set(0, 0, 8)

    state.hemiLight.position.set(0, 50, 0)
    state.scene.add(state.hemiLight)

    state.dirLight.position.set(-10, 28, 10)
    state.dirLight.position.multiplyScalar(10)
    state.dirLight.castShadow = true
    state.dirLight.shadow.mapSize.width = 2048
    state.dirLight.shadow.mapSize.height = 2048
    state.scene.add(state.dirLight)

    const gltfLoader = new GLTFLoader()
    const renderer = ref<THREE.WebGLRenderer>()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('three-gltf')
      renderer.value = new THREE.WebGLRenderer({
        antialias: true,
        div: element,
        alpha: true
      })
      if (element !== null) {
        state.width = element.clientWidth
        state.height = element.clientHeight
      }
      renderer.value.setSize(state.width, state.height)
      renderer.value.shadowMap.enabled = true
      gltfLoader.load(
        props.src,
        (gltf) => {
          state.scene.add(gltf.scene)
          document.addEventListener('mousemove', (event) => {
            state.mouseX = event.pageX
            state.mouseY = event.pageY
          })
        },
        (xhr) => {
          onProgress(xhr)
        },
        (err) => {
          onError(err)
        }
      )
      const controls = new OrbitControls(
        state.camera,
        renderer.value.domElement
      )
      controls.update()
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
      throw new Error(`gltfLoader error ${err}`)
    }

    const animate = () => {
      const targetRotX = (state.mouseX / window.innerWidth) * 360
      const targetRotY = (state.mouseY / window.innerHeight) * 360
      state.rotateX += (targetRotX - state.rotateX) * 0.02
      state.rotateY += (targetRotY - state.rotateY) * 0.02
      // ラジアンに変換する
      const radianX = (state.rotateX * Math.PI) / 180
      const radianY = (state.rotateY * Math.PI) / 180
      // 角度に応じてカメラの位置を設定
      state.camera.position.x = 10 * Math.sin(radianX)
      state.camera.position.y = 10 * Math.sin(radianY)
      // 原点方向を見つめる
      state.camera.lookAt(new THREE.Vector3(0, 0, 0))
      // レンダリング
      renderer.value.render(state.scene, state.camera)
      requestAnimationFrame(animate)
    }

    return {
      ...toRefs(state),
      renderer
    }
  }
})
</script>
