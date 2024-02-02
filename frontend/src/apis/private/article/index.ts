import ArticleApis from '@apis/private/article/type';
import { AxiosInstance } from 'axios';

const privateArticleApis = (client: AxiosInstance): ArticleApis => {
  return {
    postArticle: async (body: FormData): Promise<void> => {
      await client.post('/article', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },

    patchArticle: async (id: number, body: FormData): Promise<void> => {
      await client.patch(`/article/edit/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },

    deleteArticle: async (id: number): Promise<void> => {
      await client.delete(`/article/${id}`);
    },

    postArticlePrefer: async (id: number): Promise<void> => {
      await client.post(`/article/prefer/${id}`);
    },

    deleteArticlePrefer: async (id: number): Promise<void> => {
      await client.delete(`/article/prefer/${id}`);
    },

    postArticleComment: async (id: number, comment: string): Promise<void> => {
      await client.post(`/article/comment/${id}`, { comment });
    },

    patchArticleComment: async (id: number, comment: string): Promise<void> => {
      await client.patch(`/article/comment/${id}`, { comment });
    },

    deleteArticleComment: async (id: number): Promise<void> => {
      await client.delete(`/article/comment/${id}`);
    },
  };
};

export default privateArticleApis;
