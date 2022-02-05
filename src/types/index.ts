import Router from 'vue-router'
import { ExStore } from '@/types/store/ex-store-type'
import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode'

/**
 * context.app内から使用可能
 */
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $colorMode: ColorModeInstance
  }
}
