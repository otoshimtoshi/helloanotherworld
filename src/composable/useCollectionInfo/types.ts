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
