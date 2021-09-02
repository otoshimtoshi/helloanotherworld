import * as THREE from 'three'
import { $MathEx } from '@/scripts/utils/math-ex'
import groundFrag from './glsl/ground.frag'
import groundVert from './glsl/ground.vert'

export default class Ground {
  uniforms: { [uniform: string]: THREE.IUniform }
  obj: THREE.Mesh
  constructor() {
    this.uniforms = {
      time: {
        value: 0
      }
    }
    this.obj = this.createObj()
    this.obj.position.set(0, -10, 0)
    this.obj.rotation.set($MathEx.radians(95), 0, 10)
  }
  createObj(): THREE.Mesh {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(256, 256, 128, 128),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: groundVert,
        fragmentShader: groundFrag,
        transparent: true,
        wireframe: true
      })
    )
  }
  render(time: number): void {
    this.uniforms.time.value += time
  }
}
