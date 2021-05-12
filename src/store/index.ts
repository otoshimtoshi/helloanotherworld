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
        }
      ]
    },
    {
      id: 'blog',
      title: 'Blog - helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I´ll share something that might be helpful.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Blog - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'I´ll share something that might be helpful.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/blog'
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
          content: 'Previous Works.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Collection - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Previous Works.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/collection'
        }
      ]
    },
    {
      id: 'who-me-are',
      title: 'WhoMeAre - helloanotherworld.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Introduce myself.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'WhoMeAre - helloanotherworld.com'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Introduce myself.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://helloanotherworld.com/who-me-are'
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
        }
      ]
    }
  ]
})

export const getters: Getters<S, G> = {
  getMetaInfo(state) {
    return (id) => state.metaInfo.find((page) => page.id === id)
  }
}

export const mutations: Mutations<S, M> = {
  setMetaInfo(state, id) {
    state.metaInfo = id
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
  }
}
