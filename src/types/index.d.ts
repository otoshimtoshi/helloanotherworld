import Router from 'vue-router'
import { ExStore } from '@/types/store/ex-store-type'
import { DateUtils } from '@/plugins/utils/date'
// import { ScrollUtil } from '@/plugins/scroll-magic'

/**
 * context.app内から使用可能
 */
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $date: DateUtils
    // $scrollUtil: ScrollUtil
  }
}
