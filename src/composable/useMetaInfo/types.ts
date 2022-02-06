/** meta情報 */
export type MetaInfo = {
  /** 各ページのid */
  id: string
  /** ブラウザに表示するtitle */
  title: string
  /** Meta詳細 */
  meta: MetaInfoDetail[]
}

/** Meta詳細 */
type MetaInfoDetail = {
  /** nuxt用hid */
  hid: string
  /** meta情報 名 */
  name: string
  /** meta情報 内容 */
  content: string
}
