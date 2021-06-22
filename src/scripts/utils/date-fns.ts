import { ja } from 'date-fns/locale'
import { format } from 'date-fns'

type NullableDate = Date | number | string | null | undefined
// ライブラリーを変更する場合に備えて型を指定しておく
export type DateUtils = {
  formatLocalEn: (d: NullableDate, f?: string) => string
  format: (d: NullableDate, f?: string) => string
}
export const $date: DateUtils = {
  formatLocalEn: (d, f = 'yyyy/MM/dd') => (d ? format(new Date(d), f) : ''),
  format: (d, f = 'yyyy/MM/dd') => (d ? format(new Date(d), f, { locale: ja }) : '')
}
