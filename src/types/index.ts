export interface RootState<Pages> {
  pages: Array<Pages>;
}

export interface Pages {
  /** 各ページのid */
  id: string;
  /** ブラウザに表示するtitle */
  title?: string;
  /** ブラウザに表示するdescription */
  description?: string;
  /** ブラウザに表示するurl */
  url?: string;
  /** ブラウザに表示するogimage */
  ogimage?: string;
}
