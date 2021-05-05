import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import ScrollMagic, {
  ControllerConstructorOptions,
  SceneConstructorOptions
} from 'scrollmagic'
import { TimelineMax, TweenMax } from 'gsap'
import { ScrollMagicPluginGsap } from './vendor/ScrollMagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

export interface ScrollUtil {
  SimplifiedUse: (
    setTarget: string,
    classToggleName?: string,
    cOption?: ControllerConstructorOptions,
    sOption?: SceneConstructorOptions
  ) => ScrollMagic.Scene
  Controller: (
    controllOption?: ControllerConstructorOptions
  ) => ScrollMagic.Controller
  Scene: (sceneOption?: SceneConstructorOptions) => ScrollMagic.Scene
}

export default defineNuxtPlugin((_, inject) => {
  const $scrollmagic: ScrollUtil = {
    SimplifiedUse: (setTarget, classToggleName, cOption, sOption) => {
      const controller = cOption
        ? new ScrollMagic.Controller(cOption)
        : new ScrollMagic.Controller({ globalSceneOptions: { duration: 100 } })
      const scene = sOption
        ? new ScrollMagic.Scene(sOption)
        : new ScrollMagic.Scene({ triggerElement: '.selecter' })
      if (classToggleName) {
        return scene
          .setClassToggle(setTarget, classToggleName)
          .addTo(controller)
      } else {
        return scene.setClassToggle(setTarget, 'fadeIn').addTo(controller)
      }
    },
    Controller: (controllOption) => {
      return controllOption
        ? new ScrollMagic.Controller(controllOption)
        : new ScrollMagic.Controller()
    },
    Scene: (sceneOption) => {
      return sceneOption
        ? new ScrollMagic.Scene(sceneOption)
        : new ScrollMagic.Scene()
    }
  }
  inject('scrollmagic', $scrollmagic)
})
