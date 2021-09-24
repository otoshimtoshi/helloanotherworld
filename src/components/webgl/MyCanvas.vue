<template>
  <div id="mycanvas" />
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
} from '@nuxtjs/composition-api'
import {
  PerspectiveCamera,
  Scene,
  HemisphereLight,
  DirectionalLight,
  Clock,
  Group,
  WebGLRenderer,
  Color,
  sRGBEncoding
} from 'three'
import Ground from '@/composable/ground'

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  setup(props) {
    const state = reactive({
      camera: new PerspectiveCamera(),
      scene: new Scene(),
      hemiLight: new HemisphereLight(0xffffff, 0x444444),
      dirLight: new DirectionalLight(0xffffff),
      clock: new Clock(),
      model: new Group(),
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
      state.scene.background = new Color(0xe6e7e8)
      // hemiLight
      state.scene.add(state.hemiLight)
      // dirLight
      state.scene.add(state.dirLight)
      setBackGroundColor()
      state.scene.add(state.ground.obj)
    }
    init()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('mycanvas')
      if (element === null) return
      renderer.value = new WebGLRenderer({ antialias: true })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      renderer.value.outputEncoding = sRGBEncoding
      renderer.value.shadowMap.enabled = true
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      state.camera.position.set(0, 50, 100)
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
      cancelAnimationFrame(state.myReq)
      state.myReq = requestAnimationFrame(animate)
      const mixerUpdateDelta = state.clock.getDelta()
      state.ground.render(mixerUpdateDelta)
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
