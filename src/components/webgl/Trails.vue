<template>
  <div id="trails" class="trails">{{ currentMode2 }}{{ currentMode }}</div>
</template>

<script setup lang="ts">
import { useColorMode } from '~~/src/composable/useColorMode'
import * as THREE from 'three'

const { getMode, currentMode } = useColorMode()
const currentMode2 = getMode()
watch(
  () => currentMode2.value,
  () => {
    if (currentMode2.value === 'yellow') {
      state.scene.remove(state.model)
      init()
    } else {
      state.scene.remove(state.model)
      init()
    }
    console.log(currentMode2)
  }
)
const state = reactive({
  color: [] as THREE.Color[],
  camera: new THREE.PerspectiveCamera(),
  scene: new THREE.Scene(),
  clock: new THREE.Clock(),
  model: new THREE.Group(),
  geometry: new THREE.BufferGeometry(),
  material: new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    depthTest: false,
    sizeAttenuation: false
  })
})

const renderer = ref<THREE.WebGLRenderer>()

const init = () => {
  state.color = []
  if (currentMode2.value !== 'yellow') {
    state.color.push(new THREE.Color(0xdae2ec))
  } else {
    state.color.push(new THREE.Color(0x091a28))
  }
  const positions = []
  const colors = []
  for (let i = 0; i < 2000; i++) {
    positions.push(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    )
    const clr = state.color[Math.floor(Math.random() * state.color.length)]
    colors.push(clr.r, clr.g, clr.b)
  }
  state.geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  )
  state.geometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(colors, 3)
  )
  const mesh = new THREE.Points(state.geometry, state.material)
  state.model.add(mesh)
  state.scene.add(state.model)
}
init()

onMounted(() => {
  const element: HTMLElement | null = document.getElementById('trails')
  if (element === null) return
  renderer.value = new THREE.WebGLRenderer({
    alpha: true
  })
  renderer.value.setPixelRatio(window.devicePixelRatio)
  renderer.value.setSize(window.innerWidth, window.innerHeight)
  element.appendChild(renderer.value.domElement)
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
  requestAnimationFrame(animate)
  if (renderer.value === undefined) return
  const elapsedTime = state.clock.getElapsedTime()
  state.scene.rotation.x = elapsedTime * 0.05
  state.scene.rotation.y = elapsedTime * 0.04
  state.scene.rotation.z = elapsedTime * 0.03
  renderer.value.render(state.scene, state.camera)
}
</script>
