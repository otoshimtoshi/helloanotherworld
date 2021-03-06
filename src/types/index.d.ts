import Router from 'vue-router'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ExStore } from '@/types/store/ex-store-type'
import { DateUtils } from '@/plugins/util/date'
import { ScrollUtil } from '@/plugins/scroll-magic'

/**
 * context.app内から使用可能
 */
declare module '@nuxtjs/customTypes' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $axios: NuxtAxiosInstance
    $dateUtil: DateUtils
    $scrollUtil: ScrollUtil
  }
}
