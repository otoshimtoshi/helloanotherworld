import { AxiosResponse } from 'axios'

/** meta情報 */
export interface MetaInfo {
  /** 各ページのid */
  id: string
  /** ブラウザに表示するtitle */
  title: string
  /** Meta詳細 */
  meta: MetaInfoDetail[]
}
/** Meta詳細 */
interface MetaInfoDetail {
  /** nuxt用hid */
  hid: string
  /** meta情報 名 */
  name: string
  /** meta情報 内容 */
  content: string
}

export interface S {
  /** meta情報 */
  metaInfo: MetaInfo[]
}

/** gettersの名前と引数と戻り値の型 */
export interface G {
  getMetaInfo: (id: string | null) => MetaInfo | undefined
}

/** mutationsの名前と引数の型 */
export interface M {
  setMetaInfo: Array<MetaInfo>
}

/** actionsの名前と引数の型 */
export interface A {
  fetchMetaInfo: () => Promise<AxiosResponse<MetaInfo[]>>
}
