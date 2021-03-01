import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Scrollmagic, {
  ControllerConstructorOptions,
  SceneConstructorOptions
} from 'scrollmagic'

export interface ScrollUtil {
  simplifiedUse: (
    setTarget: string,
    classToggleName?: string,
    cOption?: ControllerConstructorOptions,
    sOption?: SceneConstructorOptions
  ) => Scrollmagic.Scene
  controller: (
    controllOption?: ControllerConstructorOptions
  ) => Scrollmagic.Controller
  scene: (sceneOption?: SceneConstructorOptions) => Scrollmagic.Scene
}

export default defineNuxtPlugin((_, inject) => {
  const $scrollUtil: ScrollUtil = {
    simplifiedUse: (setTarget, classToggleName, cOption, sOption) => {
      const controller = cOption
        ? new Scrollmagic.Controller(cOption)
        : new Scrollmagic.Controller({ globalSceneOptions: { duration: 100 } })
      const scene = sOption
        ? new Scrollmagic.Scene(sOption)
        : new Scrollmagic.Scene({ triggerElement: '.selecter' })
      if (classToggleName) {
        return scene
          .setClassToggle(setTarget, classToggleName)
          .addTo(controller)
      } else {
        return scene.setClassToggle(setTarget, 'fadeIn').addTo(controller)
      }
    },
    controller: (controllOption) => {
      return controllOption
        ? new Scrollmagic.Controller(controllOption)
        : new Scrollmagic.Controller()
    },
    scene: (sceneOption) => {
      return sceneOption
        ? new Scrollmagic.Scene(sceneOption)
        : new Scrollmagic.Scene()
    }
  }
  inject('scrollMagic', $scrollUtil)
})
