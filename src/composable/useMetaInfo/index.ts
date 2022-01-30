import { ref } from '#imports'
import { MetaInfo } from './types'

/**
 * metaタグ用のstate
 */
export const useMetaInfo = () => {
  /** metaタグ情報 */
  const metaInfo = ref<MetaInfo[]>([
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
  ])

  /**
   * ページのmeta情報
   * @param id ページのPath
   * @returns MetaInfo
   */
  const getMetaInfo = (id: string) =>
    metaInfo.value.find((info) => info.id === id)

  return {
    metaInfo: readonly(metaInfo),
    getMetaInfo
  }
}
