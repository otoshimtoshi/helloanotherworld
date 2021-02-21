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
      description:
        'Front-end developer portfolio. I´ll do what I want to do. Interested in JS frameworks (Vue, React), 3D modeling, machine learning, CityGML, etc.',
      url: 'https://helloanotherworld.com'
    },
    {
      id: 'blog',
      title: 'Blog - ブログ - HelloAnotherWorld',
      description: 'I´ll share something that might be helpful.',
      url: 'https://helloanotherworld.com/blog'
    },
    {
      id: 'collection',
      title: 'Collection - 作品集 - HelloAnotherWorld',
      description: 'Previous Works.',
      url: 'https://helloanotherworld.com/collection'
    },
    {
      id: 'who-me-are',
      title: 'WhoMeAre - 自己紹介 - HelloAnotherWorld',
      description: 'Introduce myself.',
      url: 'https://helloanotherworld.com/who-me-are'
    },
    {
      id: 'contact',
      title: 'Contact - お問い合わせ - HelloAnotherWorld',
      description: 'Contact Us.',
      url: 'https://helloanotherworld.com/contact'
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
  /** スタッフ一覧取得関数を受け取り実行、StaffStateの形に整形してsetStaffs */
  async fetchMetaInfo({ commit }, fetchFunc) {
    const response = await fetchFunc();
    const metaInfo = response.data.map((meta) => {
      return {
        id: meta.id,
        title: meta.title,
        description: meta.description,
        url: meta.url
      };
    });
    commit('setMetaInfo', metaInfo);
  }
};
