<template>
  <div id="myCanvas2" />
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
      camera: new THREE.PerspectiveCamera(75, 300 / 300, 1, 2000),
      scene: new THREE.Scene(),
      hemiLight: new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2),
      dirLight: new THREE.DirectionalLight(0xffffff, 0.9),
      manager: new LoadingManager(),
      mouseX: 0,
      mouseY: 0,
      rotate: 0
    })

    state.camera.position.set(0, -10, 55)

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
          state.scene.add(obj)
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
      // const targetRot = (state.mouseX / window.innerWidth) * 360
      // state.rotate += (targetRot - state.rotate) * 0.02 // 毎フレーム角度を0.5度ずつ足していく
      // // ラジアンに変換する
      // const radian = (state.rotate * Math.PI) / 180
      // // 角度に応じてカメラの位置を設定
      // state.camera.position.x = 100 * Math.sin(radian)
      // state.camera.position.z = 50 * Math.cos(radian)
      // state.camera.position.y = 100 * Math.sin(radian)
      // 原点方向を見つめる
      // state.camera.lookAt(new THREE.Vector3(0, 0, 0))
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
