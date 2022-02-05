import {
  RootState,
  RootGetters,
  RootMutations,
  RootActions
} from '@/types/store/ex-store-impl'

export type Getters<S, G> = {
  [K in keyof G]: (
    state: S,
    getters: G,
    rootState: RootState,
    rootGetters: RootGetters
  ) => G[K]
}

export type Mutations<S, M> = {
  [K in keyof M]: (state: S, payload: M[K]) => void
}

/* eslint-disable */
type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
type ExDispatch<A> = <T extends keyof A>(
  type: T,
  payload?: A[T]
) => Promise<any>
type ExActionContext<S, A, G, M> = {
  commit: ExCommit<M>
  dispatch: ExDispatch<A>
  state: S
  getters: G
  rootState: RootState
  rootGetters: RootGetters
}
export type Actions<S, A, G = any, M = any> = {
  [K in keyof A]: (ctx: ExActionContext<S, A, G, M>, payload: A[K]) => any
}
/* eslint-enable */
export type StoreContext = ExActionContext<
  RootState,
  RootActions,
  RootGetters,
  RootMutations
>

/** 本来は extends Store<RootState>となるが、ビルドが遅くなるため最小限にしておく */
export interface ExStore {
  state: RootState
  getters: RootGetters
  commit: ExCommit<RootMutations>
  dispatch: ExDispatch<RootActions>
}
