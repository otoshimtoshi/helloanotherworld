<template>
  <canvas ref="canvas" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  ref,
  watch
} from '@nuxtjs/composition-api'
import {
  PerspectiveCamera,
  Scene,
  Clock,
  Group,
  WebGLRenderer,
  Color,
  FontLoader,
  TextGeometry
} from 'three'
import Ground from '@/composable/ground'
// import Octahedron from '@/composable/octahedron'
// import OctahedronShell from '@/composable/octahedron-shell'
import TextWire from '@/composable/text-wire'

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  setup(props) {
    const state = reactive({
      canvas: null as HTMLCanvasElement | null,
      camera: new PerspectiveCamera(),
      scene: new Scene(),
      clock: new Clock(),
      ground: new Ground(),
      // octahedron: new Octahedron(),
      // octahedronShell: new OctahedronShell(),
      fontLoader: new FontLoader(),
      fontUniform: null as any
    })

    const renderer = ref<WebGLRenderer>()

    const setBackGroundColor = () => {
      switch (props.mode) {
        case 'light': {
          state.ground.updateColor(0, 0, 0)
          // state.octahedron.updateColor(0, 0, 0)
          // state.octahedronShell.updateColor(0, 0, 0)
          break
        }
        case 'yellow': {
          state.ground.updateColor(0.823, 0.619, 0)
          // state.octahedron.updateColor(0.823, 0.619, 0)
          // state.octahedronShell.updateColor(0.823, 0.619, 0)
          break
        }
        case 'red': {
          state.ground.updateColor(1, 0.498, 0.498)
          // state.octahedron.updateColor(1, 0.498, 0.498)
          // state.octahedronShell.updateColor(1, 0.498, 0.498)
          break
        }
        case 'blue': {
          state.ground.updateColor(0.498, 0.505, 1)
          // state.octahedron.updateColor(0.498, 0.505, 1)
          // state.octahedronShell.updateColor(0.498, 0.505, 1)
          break
        }
        case 'green': {
          state.ground.updateColor(0, 0.8, 0.043)
          // state.octahedron.updateColor(0, 0.8, 0.043)
          // state.octahedronShell.updateColor(0, 0.8, 0.043)
          break
        }
        default: {
          break
        }
      }
    }

    const init = () => {
      state.scene.background = new Color(0xe6e7e8)
      setBackGroundColor()
      state.scene.add(state.ground.obj)
      // state.scene.add(state.octahedron.obj)
      // state.scene.add(state.octahedronShell.obj)
    }
    init()

    onMounted(() => {
      if (state.canvas === null) return
      renderer.value = new WebGLRenderer({
        antialias: true,
        canvas: state.canvas
      })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)

      // camera
      state.camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        10000
      )

      state.fontLoader.load('./Homenaje_Regular.json', (font) => {
        const geometry = new TextGeometry('Hello  Another  World', {
          font: font,
          size: 50,
          height: 4,
          curveSegments: 2,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 1
        })
        const mesh = new TextWire(geometry)
        state.fontUniform = mesh
        state.scene.add(mesh.obj)
        animate()
      })

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
      const mixerUpdateDelta = state.clock.getDelta()
      state.ground.render(mixerUpdateDelta)
      // state.octahedron.render(mixerUpdateDelta)
      // state.octahedronShell.render(mixerUpdateDelta)
      state.fontUniform.render(mixerUpdateDelta)
      if (renderer.value === undefined) return
      renderer.value.render(state.scene, state.camera)
    }

    watch(
      () => props.mode,
      () => {
        setBackGroundColor()
      }
    )

    return {
      ...toRefs(state),
      renderer
    }
  }
})
</script>
