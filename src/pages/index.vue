<template>
  <div class="wrapper-page">
    <h1>
      <span>I'm a front-end developer working in Tokyo.</span>
    </h1>
    <div class="wrapper-page-content">
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <div class="grid">
        <div class="item1">
          <div id="myCanvas" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  ref,
  useContext,
  toRefs,
  useMeta
} from '@nuxtjs/composition-api'
import * as THREE from 'three'

export default defineComponent({
  setup() {
    const { app } = useContext()
    const metaState = reactive({
      metaInfo: app.store.getters.getMetaInfo('index')
    })
    useMeta(() => ({
      title: metaState.metaInfo?.title,
      meta: metaState.metaInfo?.meta
    }))
    //
    const state = reactive({
      fov: 75,
      width: 300,
      height: 300,
      near: 0.1,
      far: 1000
    })
    const scene = ref(new THREE.Scene())
    scene.value.background = new THREE.Color().setHSL(0.6, 0, 1)
    scene.value.fog = new THREE.Fog(scene.value.background, 1, 5000)
    const camera = ref(
      new THREE.PerspectiveCamera(
        state.fov,
        state.width / state.height,
        state.near,
        state.far
      )
    )
    camera.value.position.set(0, -10, 55)

    // 三角錐
    const geometry = ref(new THREE.TetrahedronBufferGeometry(12, 0))
    const material = ref(new THREE.MeshStandardMaterial({ color: 0xe1ecf7 }))
    // メッシュを作成
    const mesh = ref(new THREE.Mesh(geometry.value, material.value))
    mesh.value.castShadow = true
    // 3D空間にメッシュを追加
    scene.value.add(mesh.value)

    // GROUND
    const groundGeo = new THREE.PlaneBufferGeometry(10000, 10000)
    const groundMat = new THREE.MeshLambertMaterial({ color: 0xe1ecf7 })

    const ground = new THREE.Mesh(groundGeo, groundMat)
    ground.position.y = -25
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.value.add(ground)

    // LIGHTS
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

    const renderer = ref<THREE.WebGLRenderer>()

    onMounted(() => {
      const element: HTMLElement | null = document.getElementById('myCanvas')
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
      element.appendChild(renderer.value.domElement)
      animate()
    })

    const animate = () => {
      renderer.value.render(scene.value, camera.value)
      const time = Date.now() * 0.001
      mesh.value.position.y = Math.sin(time) * 5
      mesh.value.rotation.x = time * 0.5
      mesh.value.rotation.z = time * 0.51
      requestAnimationFrame(animate)
    }

    return {
      ...toRefs(metaState),
      state,
      scene,
      camera,
      renderer
    }
  },
  // @ts-ignore
  head() {}
})
</script>
