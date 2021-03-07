import Router from 'vue-router'
import { ExStore } from '@/types/store/ex-store-type'
import { dateFns } from '@nuxtjs/date-fns/types/date-fns'

/**
 * context.app内から使用可能
 */
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    store: ExStore
    router: Router
    $dateFns: dateFns
  }
}
