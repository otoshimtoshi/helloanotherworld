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
  HemisphereLight,
  DirectionalLight,
  Clock,
  Group,
  AnimationMixer,
  Object3D,
  WebGLRenderer,
  Color,
  sRGBEncoding
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Ground from '@/composable/ground'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'light'
    },
    loadPercent: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      camera: new PerspectiveCamera(),
      scene: new Scene(),
      hemiLight: new HemisphereLight(0xffffff, 0x444444),
      dirLight: new DirectionalLight(0xffffff),
      gltfLoader: new GLTFLoader(),
      clock: new Clock(),
      model: new Group(),
      mixer: new AnimationMixer(new Object3D()),
      ground: new Ground(),
      myReq: 0
    })

    const renderer = ref<WebGLRenderer>()

    const setBackGroundColor = () => {
      switch (props.mode) {
        case 'light': {
          state.ground.updateColor(1, 1, 1)
          state.scene.remove(state.hemiLight)
          state.hemiLight = new HemisphereLight(0xffffff, 0x999999)
          state.scene.add(state.hemiLight)
          break
        }
        case 'yellow': {
          state.ground.updateColor(0.823, 0.619, 0)
          state.scene.remove(state.hemiLight)
          state.hemiLight = new HemisphereLight(0xffffff, 0xd29e00)
          state.scene.add(state.hemiLight)
          break
        }
        case 'red': {
          state.ground.updateColor(1, 0.498, 0.498)
          state.scene.remove(state.hemiLight)
          state.hemiLight = new HemisphereLight(0xffffff, 0xff1919)
          state.scene.add(state.hemiLight)
          break
        }
        case 'blue': {
          state.ground.updateColor(0.498, 0.505, 1)
          state.scene.remove(state.hemiLight)
          state.hemiLight = new HemisphereLight(0xffffff, 0x0003ff)
          state.scene.add(state.hemiLight)
          break
        }
        case 'green': {
          state.ground.updateColor(0, 0.8, 0.043)
          state.scene.remove(state.hemiLight)
          state.hemiLight = new HemisphereLight(0xffffff, 0x00ff0e)
          state.scene.add(state.hemiLight)
          break
        }
        default: {
          break
        }
      }
    }

    const init = () => {
      // scene
      state.scene.background = new Color(0x000000)
      // hemiLight
      state.scene.add(state.hemiLight)
      // dirLight
      state.scene.add(state.dirLight)
      setBackGroundColor()
      state.scene.add(state.ground.obj)
    }
    init()

    onMounted(() => {
      state.gltfLoader.load(
        props.src,
        (gltf) => {
          state.model = gltf.scene
          state.scene.add(state.model)
          const animations = gltf.animations
          state.mixer = new AnimationMixer(state.model)
          const numAnimations = animations.length
          for (let i = 0; i !== numAnimations; ++i) {
            let clip = animations[i]
            const action = state.mixer.clipAction(clip)
            action.play()
          }
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
      renderer.value.outputEncoding = sRGBEncoding
      renderer.value.shadowMap.enabled = true
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      state.camera.position.set(-5, 5, -5)
      animate()
      const controls = new OrbitControls(
        state.camera,
        renderer.value.domElement
      )
      controls.enablePan = false
      controls.enableZoom = false
      controls.target.set(0, 1, 0)
      controls.update()

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
        emit('update:load-percent', Math.round(percentComplete))
        console.log('model ' + Math.round(percentComplete) + '% downloaded')
      }
    }
    function onError(err: ErrorEvent) {
      console.log(err)
      throw new Error(`gltfLoader error ${err}`)
    }

    const animate = () => {
      cancelAnimationFrame(state.myReq)
      state.myReq = requestAnimationFrame(animate)
      const mixerUpdateDelta = state.clock.getDelta()
      state.mixer.update(mixerUpdateDelta)
      state.ground.render(mixerUpdateDelta * 0.001)
      if (renderer.value === undefined) return
      renderer.value.render(state.scene, state.camera)
    }

    watch(
      () => props.mode,
      () => {
        setBackGroundColor()
      }
    )

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
