import type { Plugin } from '@nuxt/types'
import { ja } from 'date-fns/locale'
import { format, getHours, getMinutes, parse } from 'date-fns'

type ParseOptions = {
  locale?: Locale
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  useAdditionalWeekYearTokens?: boolean
  useAdditionalDayOfYearTokens?: boolean
}

export interface DateUtils {
  format(d: Date | number | string | null, f?: string): string
  formatISO: (d: Date | number | string | null, f?: string) => string
  getHours: (d: Date | number | string | null) => number
  getMinutes: (d: Date | number | string | null) => number
  parse: (
    d: string,
    f?: string,
    referenceDate?: Date | number,
    options?: ParseOptions
  ) => Date
}

const dateUtil: DateUtils = {
  format(d, f = 'yyyy/MM/dd') {
    return d ? format(new Date(d), f, { locale: ja }) : ''
  },
  formatISO: (d) => {
    if (!d) return ''
    const date = new Date(d)
    return new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    ).toISOString()
  },
  getHours: (d) => (d ? getHours(new Date(d)) : 0),
  getMinutes: (d) => (d ? getMinutes(new Date(d)) : 0),
  parse: (d, f, referenceDate) => {
    if (!d) {
      throw new ReferenceError('Missing required parameter d')
    }
    if (!f) {
      f = 'yyyy/MM/dd'
    }
    if (!referenceDate) {
      referenceDate = new Date()
    }
    return parse(d, f, referenceDate)
  }
}

const dateUtils: Plugin = (_context, inject) => {
  inject('dateUtil', dateUtil)
}

export default dateUtils
