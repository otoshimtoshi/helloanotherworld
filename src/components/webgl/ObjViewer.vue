<template>
  <div id="obj" />
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
      width: 0,
      height: 0,
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      hemiLight: new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2),
      dirLight: new THREE.DirectionalLight(0xffffff, 0.9),
      manager: new THREE.LoadingManager(),
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0
    })

    state.camera.position.set(0, 0, 100)

    state.hemiLight.position.set(0, 50, 0)
    state.scene.add(state.hemiLight)

    state.dirLight.position.set(-10, 28, 10)
    state.dirLight.position.multiplyScalar(10)
    state.dirLight.castShadow = true
    state.dirLight.shadow.mapSize.width = 2048
    state.dirLight.shadow.mapSize.height = 2048
    state.scene.add(state.dirLight)

    const objLoader = new OBJLoader(state.manager)
    const renderer = ref<THREE.WebGLRenderer>()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('obj')
      if (element === null) return
      renderer.value = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      state.width = element.clientWidth
      state.height = element.clientHeight

      renderer.value.setSize(state.width, state.height)
      renderer.value.shadowMap.enabled = true
      objLoader.load(
        props.src,
        (obj) => {
          state.scene.add(obj)
          document.addEventListener('mousemove', (event) => {
            state.mouseX = event.pageX
            state.mouseY = event.pageY
          })
          document.addEventListener('touchmove', (event) => {
            state.mouseX = event.touches[0].pageX
            state.mouseY = event.touches[0].pageY
          })
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

    function onProgress(xhr: ProgressEvent) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100
        console.log('model ' + Math.round(percentComplete) + '% downloaded')
      }
    }
    function onError(err: ErrorEvent) {
      console.log(err)
      throw new Error(`objLoader error ${err}`)
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
      state.camera.position.x = Math.sin(radianX) * 2.5
      state.camera.position.y = Math.sin(radianY) * 2.5
      // 原点方向を見つめる
      state.camera.lookAt(new THREE.Vector3(0, 0, 0))
      // レンダリング
      if (renderer.value === undefined) return
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