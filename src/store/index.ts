import { Getters, Mutations, Actions } from '@/types/store/ex-store-type'
import { S, G, M, A } from '@/types/store'

/**
 * Vuexで管理されるstateのキャッシュ
 */
export const state = (): S => ({
  metaInfo: [
    {
      id: 'index',
      title: 'helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://helloanotherworld.com/ogp.png'
        }
      ]
    },
    {
      id: 'who_i_am',
      title: 'WhoIAm - helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Introduce myself.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'WhoIAm - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Introduce myself.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/who_i_am'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://helloanotherworld.com/ogp.png'
        }
      ]
    },
    {
      id: 'collection',
      title: 'Collection - helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My collections.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Collection - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'My collections.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/collection'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://helloanotherworld.com/ogp.png'
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact - helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Us.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Contact - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Contact Us.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/contact'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://helloanotherworld.com/ogp.png'
        }
      ]
    },
    {
      id: 'office',
      title: 'Collection - Office',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Keyword Three.js,Office'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Collection - Office'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Keyword Three.js,Office'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/collection/office/'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://helloanotherworld.com/ogp.png'
        }
      ]
    }
  ],
  collectionInfo: [
    // {
    //   id: 'office',
    //   title: 'office',
    //   created_date: '2022.01.02',
    //   updated_date: '',
    //   description: '',
    //   pcSrc: require('@/assets/collection/office/collection_office_iPad.png'),
    //   spSrc: require('@/assets/collection/office/collection_office_iPhone.png')
    // }
  ]
})

export const getters: Getters<S, G> = {
  getMetaInfo(state) {
    return (id) => state.metaInfo.find((info) => info.id === id)
  },
  getCollectionInfo(state) {
    return (id) => state.collectionInfo.find((info) => info.id === id)
  }
}

export const mutations: Mutations<S, M> = {
  setMetaInfo(state, id) {
    state.metaInfo = id
  },
  setCollectionInfo(state, id) {
    state.collectionInfo = id
  }
}

export const actions: Actions<S, A, G, M> = {
  async fetchMetaInfo({ commit }, fetchFunc) {
    const response = await fetchFunc()
    const metaInfo = response.data.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        meta: item.meta
      }
    })
    commit('setMetaInfo', metaInfo)
  },
  async fetchCollectionInfo({ commit }, fetchFunc) {
    const response = await fetchFunc()
    const collectionInfo = response.data.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        created_date: item.created_date,
        updated_date: item.updated_date,
        description: item.description
      }
    })
    commit('setCollectionInfo', collectionInfo)
  }
}
