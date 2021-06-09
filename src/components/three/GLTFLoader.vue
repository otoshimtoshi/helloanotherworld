<template>
  <div id="three-gltf" />
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  toRefs,
  ref
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
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      rotateX: 0,
      rotateY: 0,
      camera: new THREE.PerspectiveCamera(),
      scene: new THREE.Scene(),
      hemiLight: new THREE.HemisphereLight(0xffffff, 0x444444),
      dirLight: new THREE.DirectionalLight(0xffffff),
      gltfLoader: new GLTFLoader(),
      clock: new THREE.Clock(),
      model: new THREE.Group(),
      mixer: new THREE.AnimationMixer(new THREE.Object3D())
    })

    const renderer = ref<THREE.WebGLRenderer>()

    const init = () => {
      // scene
      state.scene.background = new THREE.Color(0xa0a0a0)
      state.scene.fog = new THREE.Fog(0xa0a0a0, 10, 50)
      // hemiLight
      state.hemiLight.position.set(0, 20, 0)
      state.scene.add(state.hemiLight)
      // dirLight
      state.dirLight.position.set(3, 10, 10)
      state.dirLight.castShadow = true
      state.dirLight.shadow.camera.top = 2
      state.dirLight.shadow.camera.bottom = -2
      state.dirLight.shadow.camera.left = -2
      state.dirLight.shadow.camera.right = 2
      state.dirLight.shadow.camera.near = 0.1
      state.dirLight.shadow.camera.far = 40
      state.scene.add(state.dirLight)
    }
    init()

    onMounted(() => {
      state.gltfLoader.load(
        props.src,
        (gltf) => {
          state.model = gltf.scene
          state.scene.add(state.model)
          const animations = gltf.animations
          console.log(animations)
          state.mixer = new THREE.AnimationMixer(state.model)
          const numAnimations = animations.length
          for (let i = 0; i !== numAnimations; ++i) {
            let clip = animations[i]
            const action = state.mixer.clipAction(clip)
            action.play()
          }
          animate()
        },
        (xhr) => {
          onProgress(xhr)
        },
        (err) => {
          onError(err)
        }
      )

      const element: HTMLElement | null = document.getElementById('three-gltf')
      if (element === null) return
      renderer.value = new THREE.WebGLRenderer({ antialias: true })
      renderer.value.setPixelRatio(window.devicePixelRatio)
      renderer.value.setSize(window.innerWidth, window.innerHeight)
      renderer.value.outputEncoding = THREE.sRGBEncoding
      renderer.value.shadowMap.enabled = true
      element.appendChild(renderer.value.domElement)

      // camera
      state.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        100
      )
      state.camera.position.set(-1, 0, 6)

      const controls = new OrbitControls(
        state.camera,
        renderer.value.domElement
      )
      controls.enablePan = false
      controls.enableZoom = false
      controls.target.set(1, -2, -4)
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
        console.log('model ' + Math.round(percentComplete) + '% downloaded')
      }
    }
    function onError(err: ErrorEvent) {
      console.log(err)
      throw new Error(`gltfLoader error ${err}`)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      const mixerUpdateDelta = state.clock.getDelta()
      state.mixer.update(mixerUpdateDelta)
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
