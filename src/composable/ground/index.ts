import { Mesh, IUniform, PlaneBufferGeometry, RawShaderMaterial } from 'three'
import { $MathEx } from '@/scripts/utils/math-ex'
import groundFrag from './glsl/ground.frag'
import groundVert from './glsl/ground.vert'

export default class Ground {
  /** glsl変数 uniform */
  uniforms: { [uniform: string]: IUniform }
  /** Mesh */
  obj: Mesh

  constructor() {
    this.uniforms = {
      time: {
        value: 0
      },
      rColor: {
        value: 1
      },
      gColor: {
        value: 1
      },
      bColor: {
        value: 1
      }
    }
    this.obj = this.createObj()
    this.obj.position.set(0, -10, 0)
    this.obj.rotation.set($MathEx.radians(95), 0, 10)
  }
  /**
   * @returns THREE.Mesh in PlaneBufferGeometry and RawShaderMaterial
   */
  createObj(): Mesh {
    return new Mesh(
      new PlaneBufferGeometry(256, 256, 128, 128),
      new RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: groundVert,
        fragmentShader: groundFrag,
        transparent: true,
        wireframe: true
      })
    )
  }
  /**
   * @param time
   */
  render(time: number): void {
    this.uniforms.time.value += time
  }

  /**
   *
   */
  updateColor(r: number, g: number, b: number): void {
    this.uniforms.rColor.value = r
    this.uniforms.gColor.value = g
    this.uniforms.bColor.value = b
  }
}
