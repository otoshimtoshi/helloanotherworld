import Router from 'vue-router'
import { ExStore } from '@/types/store/ex-store-type'
import { DateUtils } from '@/scripts/utils/date-fns'
import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode'
import { ScrollUtil } from '@/plugins/scroll-magic'

/**
 * context.app内から使用可能
 */
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $dateFns: DateUtils
    $colorMode: ColorModeInstance
    $scrollmagic: ScrollUtil
  }
}
