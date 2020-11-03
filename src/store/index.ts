import { MutationTree, ActionTree, ActionContext } from 'vuex';
import { Context as AppContext } from '@nuxt/types';
import { RootState, Pages } from '@/types';
// import data from "@/static/data.json";

export const state = (): RootState<Pages> => ({
  pages: [],
});

export const mutations: MutationTree<RootState<Pages>> = {
  setPages(state: RootState<Pages>, pages: Pages[]): void {
    state.pages = pages;
  },
};

export const getters = {
  pages: (state: RootState<Pages>): Pages[] => {
    return state.pages;
  },
  getPageId: (state: RootState<Pages>) => (id: string) => {
    return state.pages.find((item) => item.id === id);
  },
};

interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(
    actionContext: ActionContext<S, R>,
    appContext: AppContext
  ): void;
}

export const actions: Actions<RootState<Pages>, RootState<Pages>> = {
  async nuxtServerInit({ commit }, context) {
    let pages: Pages[] = [];
    // pages = context.isStatic ?
    //   data :
    //   await Object.assign(pages, data);
    // commit("setPages", pages.slice(0, data.length))
  },
};
