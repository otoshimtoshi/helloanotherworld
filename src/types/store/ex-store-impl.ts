/** モジュールの実装に依存して増えるRootState等の型 */
import * as Root from '@/types/store';

/**
 * モジュールが増える度に、交差型で更新する
 * 例）export type RootState = Root.S & { module1: Module1.S }
 *    export type RootGetters = Root.G & Module1.RG
 */
export type RootState = Root.S;
export type RootGetters = Root.G;
export type RootMutations = Root.M;
export type RootActions = Root.A;
