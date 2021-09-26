import { Mesh, IUniform, OctahedronGeometry, RawShaderMaterial } from 'three'
import debrisFrag from './glsl/debris.frag'
import debrisVert from './glsl/debris.vert'

export default class Debris {
  /** glsl変数 uniform */
  uniforms: { [uniform: string]: IUniform }
  /** Mesh */
  obj: Mesh

  constructor(x: number, y: number, z: number) {
    this.uniforms = {
      time: {
        value: 0
      },
      rotate: {
        value: Math.random() * 10
      },
      rColor: {
        value: 0
      },
      gColor: {
        value: 0
      },
      bColor: {
        value: 0
      }
    }
    this.obj = this.createObj()
    this.obj.position.set(x, y, z)
  }
  /**
   * @returns THREE.Mesh in BoxGeometry and RawShaderMaterial
   */
  createObj(): Mesh {
    return new Mesh(
      new OctahedronGeometry(5, 0),
      new RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: debrisVert,
        fragmentShader: debrisFrag,
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
