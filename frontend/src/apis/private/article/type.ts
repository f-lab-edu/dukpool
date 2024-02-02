type ArticleApis = {
  postArticle: (body: FormData) => Promise<void>;
  patchArticle: (id: number, body: FormData) => Promise<void>;
  deleteArticle: (id: number) => Promise<void>;
  postArticlePrefer: (id: number) => Promise<void>;
  deleteArticlePrefer: (id: number) => Promise<void>;
  postArticleComment: (id: number, comment: string) => Promise<void>;
  patchArticleComment: (id: number, comment: string) => Promise<void>;
  deleteArticleComment: (id: number) => Promise<void>;
};

export default ArticleApis;
