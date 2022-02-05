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

/** コレクション詳細情報 */
export type CollectionInfo = {
  /** ID */
  id: string
  /** タイトル */
  title: string
  /** 作成日 */
  created_date: string
  /** 更新日 */
  updated_date?: string
  /** 説明 */
  description: string
  /** PC画像URL */
  pcSrc: string
  /** SP画像URL */
  spSrc: string
}

export interface S {
  /** meta情報 */
  metaInfo: MetaInfo[]
  /** コレクション詳細情報 */
  collectionInfo: CollectionInfo[]
}

/** gettersの名前と引数と戻り値の型 */
export interface G {
  getMetaInfo: (id: string | null) => MetaInfo | undefined
  getCollectionInfo: (id: string | null) => CollectionInfo | undefined
}

/** mutationsの名前と引数の型 */
export interface M {
  setMetaInfo: Array<MetaInfo>
  setCollectionInfo: Array<CollectionInfo>
}

/** actionsの名前と引数の型 */
export interface A {
  fetchMetaInfo: () => Promise<any>
  fetchCollectionInfo: () => Promise<any>
}
