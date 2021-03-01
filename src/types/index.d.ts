import Router from 'vue-router'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ExStore } from '@/types/store/ex-store-type'
import { DateUtils } from '@/plugins/util/date'
import { Format } from '@/plugins/util/format'
import { ScrollUtil } from '@/plugins/scroll-magic'

/**
  context.app内から使用可能
  例: const { app } = useContext()
      app.storeやapp.$dateとして使用
*/
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $axios: NuxtAxiosInstance
    $date: DateUtils
    $format: Format
    $scrollUtil: ScrollUtil
  }
}
