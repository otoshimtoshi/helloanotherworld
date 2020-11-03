export interface RootState<Pages> {
  pages: Array<Pages>;
}

export interface Pages {
  title: string,
  id: string,
  description: string,
  path: string,
  posted?: string | null,
  update?: string | null,
  color?: string | null,
}
