import {
  Mesh,
  IUniform,
  InstancedBufferGeometry,
  PlaneBufferGeometry,
  InstancedBufferAttribute,
  RawShaderMaterial,
  AdditiveBlending,
  Texture
} from 'three'
import fogFrag from './glsl/fog.frag'
import fogVert from './glsl/fog.vert'

export default class Fog {
  /** glsl変数 uniform */
  uniforms: { [uniform: string]: IUniform }
  /** Mesh */
  obj: Mesh | null
  num: number

  constructor() {
    this.uniforms = {
      time: {
        value: 0
      },
      texture: {
        value: null
      }
    }
    this.num = 200
    this.obj = null
  }
  /**
   * @returns THREE.Mesh in PlaneBufferGeometry and RawShaderMaterial
   */
  createObj(texture: Texture): Mesh {
    // Define Geometries
    const geometry = new InstancedBufferGeometry()
    const baseGeometry = new PlaneBufferGeometry(1100, 1100, 20, 20)

    // Copy attributes of the base Geometry to the instancing Geometry
    geometry.setAttribute('position', baseGeometry.attributes.position)
    geometry.setAttribute('normal', baseGeometry.attributes.normal)
    geometry.setAttribute('uv', baseGeometry.attributes.uv)
    geometry.setIndex(baseGeometry.index)

    // Define attributes of the instancing geometry
    const instancePositions = new InstancedBufferAttribute(
      new Float32Array(this.num * 3),
      3
    )
    const delays = new InstancedBufferAttribute(new Float32Array(this.num), 1)
    const rotates = new InstancedBufferAttribute(new Float32Array(this.num), 1)
    for (let i = 0, ul = this.num; i < ul; i++) {
      instancePositions.setXYZ(
        i,
        (Math.random() * 2 - 1) * 850,
        0,
        (Math.random() * 2 - 1) * 300
      )
      delays.setXYZ(i, Math.random(), 0, 0)
      rotates.setXYZ(i, Math.random() * 2 + 1, 0, 0)
    }
    geometry.setAttribute('instancePosition', instancePositions)
    geometry.setAttribute('delay', delays)
    geometry.setAttribute('rotate', rotates)

    // Define Material
    const material = new RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: fogVert,
      fragmentShader: fogFrag,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending
    })
    this.uniforms.texture.value = texture

    // Create Object3D
    return new Mesh(geometry, material)
  }
  /**
   * @param time
   */
  render(time: number): void {
    this.uniforms.time.value += time
  }
}
