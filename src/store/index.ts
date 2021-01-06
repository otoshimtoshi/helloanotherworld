import { RootState, Pages } from '@/types';

export const state = (): RootState<Pages> => ({
  pages: [
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

export const getters = {
  pages: (state: RootState<Pages>): Pages[] => {
    return state.pages;
  },
  getPages: (state: RootState<Pages>) => (id: string): Pages | undefined => {
    return state.pages.find((item) => item.id === id);
  }
};
