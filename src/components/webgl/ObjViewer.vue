<template>
  <canvas ref="canvas" />
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref, toRefs } from '#imports'
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
      canvas: null as HTMLCanvasElement | null,
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      hemiLight: new THREE.HemisphereLight(0xffffff, 0xffffff, 0.2),
      manager: new THREE.LoadingManager(),
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0
    })

    state.camera.position.set(2, 2, 5)

    state.hemiLight.position.set(0, 5, 0)
    state.scene.add(state.hemiLight)

    const objLoader = new OBJLoader(state.manager)
    const renderer = ref<THREE.WebGLRenderer>()

    onMounted(() => {
      if (state.canvas === null) return
      renderer.value = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: state.canvas
      })

      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)

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
      animate()
      window.addEventListener('resize', onWindowResize)
    })

    function onWindowResize() {
      if (renderer.value === undefined) return
      state.camera.aspect = window.innerWidth / window.innerHeight
      state.camera.updateProjectionMatrix()
      renderer.value.setSize(window.innerWidth, window.innerHeight)
    }

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
