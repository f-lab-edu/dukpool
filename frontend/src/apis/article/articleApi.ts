import useClient from '@hooks/useClient';

type ArticleApis = {
  postArticle: (body: FormData) => Promise<any>;
  patchArticle: (id: number, body: FormData) => Promise<any>;
  deleteArticle: (articleId: number) => Promise<void>;
};

const articleApi = (): ArticleApis => {
  const client = useClient();

  return {
    postArticle: async (body: FormData): Promise<any> => {
      const { data } = await client.post('/article', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },

    patchArticle: async (id: number, body: FormData): Promise<any> => {
      const { data } = await client.patch(`/article/edit/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },

    deleteArticle: async (articleId: number): Promise<void> => {
      await client.delete(`/article/${articleId}`);
    },
  };
};

export default articleApi;
