import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { ja } from 'date-fns/locale'
import { format } from 'date-fns'

export interface DateUtils {
  format: (d: Date | number | string | null, f?: string) => string
}

export default defineNuxtPlugin((_, inject) => {
  const $date: DateUtils = {
    format: (d, f = 'yyyy/MM/dd') => {
      return d ? format(new Date(d), f, { locale: ja }) : ''
    }
  }
  inject('date', $date)
})
