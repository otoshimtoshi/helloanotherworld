import { reactive, toRefs } from '@nuxtjs/composition-api'
import * as THREE from 'three'
import { $MathEx } from '@/scripts/utils/math-ex'
import groundFrag from './ground.frag'
import groundVert from './ground.vert'

const Ground = () => {
  const state = reactive<{
    uniforms: { [uniform: string]: THREE.IUniform }
    clock: THREE.Clock
  }>({
    uniforms: {
      time: {
        value: 0
      }
    },
    clock: new THREE.Clock()
  })

  const initilize = () => {
    const obj = created()
    obj.position.set(0, -200, 0)
    obj.rotation.set($MathEx.radians(-90), 0, 0)
    return obj
  }

  const created = (): THREE.Mesh => {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1024, 1024, 32, 32),
      new THREE.RawShaderMaterial({
        uniforms: state.uniforms,
        vertexShader: groundFrag,
        fragmentShader: groundVert,
        transparent: true,
        wireframe: true
      })
    )
  }

  const render = (): void => {
    state.uniforms.time.value += state.clock.getDelta()
  }

  return {
    ...toRefs(state),
    created,
    initilize,
    render
  }
}

export default Ground
