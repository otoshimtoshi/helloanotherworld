import { Getters, Mutations, Actions } from '@/types/store/ex-store-type';
import { S, G, M, A } from '@/types/store';

/**
 * Vuexで管理されるstateのキャッシュ
 */
export const state = (): S => ({
  metaInfo: [
    {
      id: 'index',
      title: 'HelloAnotherWorld',
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
          content: 'HelloAnotherWorld'
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
          content: 'HelloAnotherWorld'
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
      id: 'blog',
      title: 'Blog - ブログ - HelloAnotherWorld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'I´ll share something that might be helpful.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Blog - ブログ - HelloAnotherWorld'
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
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Blog - ブログ - HelloAnotherWorld'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'I´ll share something that might be helpful.'
        }
      ]
    },
    {
      id: 'collection',
      title: 'Collection - 作品集 - HelloAnotherWorld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Previous Works.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Collection - 作品集 - HelloAnotherWorld'
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
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Collection - 作品集 - HelloAnotherWorld'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Previous Works.'
        }
      ]
    },
    {
      id: 'who-me-are',
      title: 'WhoMeAre - 自己紹介 - HelloAnotherWorld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Introduce myself.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'WhoMeAre - 自己紹介 - HelloAnotherWorld'
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
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'WhoMeAre - 自己紹介 - HelloAnotherWorld'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Introduce myself.'
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact - お問い合わせ - HelloAnotherWorld',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Us.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Contact - お問い合わせ - HelloAnotherWorld'
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
          content: 'Contact - お問い合わせ - HelloAnotherWorld'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contact Us.'
        }
      ]
    }
  ]
});

export const getters: Getters<S, G> = {
  getMetaInfo(state) {
    return (id) => state.metaInfo.find((page) => page.id === id);
  }
};

export const mutations: Mutations<S, M> = {
  setMetaInfo(state, id) {
    state.metaInfo = id;
  }
};

export const actions: Actions<S, A, G, M> = {
  async fetchMetaInfo({ commit }, fetchFunc) {
    const response = await fetchFunc();
    const metaInfo = response.data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        meta: item.meta
      };
    });
    commit('setMetaInfo', metaInfo);
  }
};
