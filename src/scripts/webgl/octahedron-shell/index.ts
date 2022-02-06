import {
  Mesh,
  IUniform,
  OctahedronGeometry,
  DoubleSide,
  RawShaderMaterial
} from 'three'
import octahedronShellFrag from './glsl/octahedron-shell.frag'
import octahedronShellVert from './glsl/octahedron-shell.vert'

export default class OctahedronShell {
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
    this.obj.position.set(0, 0, -1000)
  }
  createObj() {
    const geometry = new OctahedronGeometry(150, 20)
    return new Mesh(
      geometry,
      new RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: octahedronShellVert,
        fragmentShader: octahedronShellFrag,
        transparent: true,
        side: DoubleSide,
        depthWrite: false
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
