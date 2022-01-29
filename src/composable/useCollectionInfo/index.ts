import { ref } from '#imports'
import { CollectionInfo } from './types'

export const useCollectionInfo = () => {
  const collectionInfo = ref<CollectionInfo[]>([
    // {
    //   id: 'office',
    //   title: 'office',
    //   created_date: '2022.01.02',
    //   updated_date: '',
    //   description: '',
    //   pcSrc: require('@/assets/collection/office/collection_office_iPad.png'),
    //   spSrc: require('@/assets/collection/office/collection_office_iPhone.png')
    // }
  ])

  const getCollectionInfo = (id: string) =>
    collectionInfo.value.find((info) => info.id === id)

  return {
    collectionInfo: readonly(collectionInfo),
    getCollectionInfo
  }
}
