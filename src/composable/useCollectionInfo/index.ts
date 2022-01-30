import { ref } from '#imports'
import { CollectionInfo } from './types'

/**
 * Collection用のstate
 */
export const useCollectionInfo = () => {
  /**
   *
   */
  const collections = ref<CollectionInfo[]>([
    {
      id: 'office',
      title: 'office',
      created_date: '2022.01.02',
      updated_date: '',
      description: '',
      pcSrc: require('~~/src/assets/collection/office/collection_office_iPad.png'),
      spSrc: require('~~/src/assets/collection/office/collection_office_iPhone.png')
    }
  ])

  /**
   * 配列から該当するIDの情報を取得
   * @param id string
   * @returns CollectionInfo
   */
  const getCollectionInfo = (id: string) =>
    collections.value.find((info) => info.id === id)

  return {
    collectionInfo: readonly(collections),
    getCollectionInfo
  }
}
