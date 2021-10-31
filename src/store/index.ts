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
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'helloanotherworld.com'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.'
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
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'WhoIAm - helloanotherworld.com'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Introduce myself.'
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
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Collection - helloanotherworld.com'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'My collections.'
        }
      ]
    },
    {
      id: 'museum',
      title: 'Collection - Museum',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Keyword Three.js,Museum'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Collection - Museum'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Keyword Three.js,Museum'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/collection/museum/'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Collection - Museum'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Keyword Three.js,Museum'
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
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact - helloanotherworld.com'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contact Us.'
        }
      ]
    }
  ],
  collectionInfo: [
    // {
    //   id: 'museum',
    //   title: '美術館',
    //   created_date: '2021.10.31',
    //   updated_date: '',
    //   description: '美術館',
    //   pcSrc: '',
    //   spSrc: ''
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
