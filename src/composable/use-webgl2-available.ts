import { onMounted } from '@nuxtjs/composition-api'
import { WEBGL } from 'three/examples/jsm/WebGL'

export const isWebGLAvailable = (): void => {
  onMounted(() => {
    if (WEBGL.isWebGL2Available() === false) {
      document.body.appendChild(WEBGL.getWebGL2ErrorMessage())
    }
  })
}
