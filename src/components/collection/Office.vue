<template>
  <div id="gltf" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  ref,
  watch,
  onUnmounted
} from '#imports'
import {
  PerspectiveCamera,
  Scene,
  DirectionalLight,
  Clock,
  Group,
  WebGLRenderer,
  Color,
  LinearEncoding,
  PCFSoftShadowMap
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      camera: new PerspectiveCamera(),
      scene: new Scene(),
      // 平行光源
      directionalLight: new DirectionalLight(0xffffff),
      gltfLoader: new GLTFLoader(),
      clock: new Clock(),
      model: new Group(),
      myReq: 0
    })

    const renderer = ref<WebGLRenderer>()

    const init = () => {
      state.scene.background = new Color(0x000000)
      state.directionalLight.position.set(0, 20, 0)
      state.scene.add(state.directionalLight)
    }
    init()

    onMounted(() => {
      state.gltfLoader.load(
        props.src,
        (gltf) => {
          state.model = gltf.scene
          state.scene.add(state.model)
        },
        (xhr) => {
          onProgress(xhr)
        },
        (err) => {
          onError(err)
        }
      )

      const element: HTMLElement | null = document.getElementById('gltf')
      if (element === null) return
      renderer.value = new WebGLRenderer({ antialias: true })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      renderer.value.physicallyCorrectLights = true
      renderer.value.outputEncoding = LinearEncoding
      renderer.value.shadowMap.enabled = true
      renderer.value.shadowMap.type = PCFSoftShadowMap
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      state.camera.position.set(30, 10, 30)
      animate()
      const controls = new OrbitControls(
        state.camera,
        renderer.value.domElement
      )
      controls.enableDamping = true
      controls.dampingFactor = 0.05

      controls.minPolarAngle = 0
      controls.maxPolarAngle = Math.PI / 2
      controls.minAzimuthAngle = 0
      controls.maxAzimuthAngle = Math.PI / 2
      controls.target.set(0, 10, 0)
      controls.update()

      window.addEventListener('resize', onWindowResize)
    })

    const onWindowResize = () => {
      if (renderer.value === undefined) return
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      state.camera.aspect = window.innerWidth / window.innerHeight
      state.camera.updateProjectionMatrix()
    }

    const onProgress = (xhr: ProgressEvent) => {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100
        emit('update:load-percent', Math.round(percentComplete))
        console.log('model ' + Math.round(percentComplete) + '% downloaded')
      }
    }
    const onError = (err: ErrorEvent) => {
      console.log(err)
      throw new Error(`gltfLoader error ${err}`)
    }

    const animate = () => {
      cancelAnimationFrame(state.myReq)
      state.myReq = requestAnimationFrame(animate)
      if (renderer.value === undefined) return
      renderer.value.render(state.scene, state.camera)
    }

    onUnmounted(() => {
      cancelAnimationFrame(state.myReq)
    })

    return {
      ...toRefs(state),
      renderer
    }
  }
})
</script>
