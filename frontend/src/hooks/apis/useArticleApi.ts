import useClient from '@hooks/useClient';

type ArticleApis = {
  mockFetchData: (index: number) => Promise<any>;
  getAllArticles: () => Promise<any>;
  getArticle: (articleId: number) => Promise<any>;
  postArticle: (body: FormData) => Promise<any>;
  patchArticle: (articleId: number, body: FormData) => Promise<any>;
  deleteArticle: (articleId: number) => Promise<void>;
  postArticlePrefer: (articleId: number) => Promise<void>;
  deleteArticlePrefer: (articleId: number) => Promise<void>;
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useArticleApi = (): ArticleApis => {
  const client = useClient();

  return {
    mockFetchData: async (index: number): Promise<any> => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const { data } = await client.get(`/posts/${index + 1}`);
      const randomNum = getRandomNumber(1, 4);
      console.log(`${index}번 컴포넌트 랜덤번호 => ${randomNum}`);
      if (randomNum === 1) throw new Error('Random Error');
      return data.body;
    },

    getAllArticles: async (): Promise<any> => {
      const { data } = await client.get('/article');
      return data;
    },

    getArticle: async (articleId): Promise<any> => {
      const { data } = await client.get(`/article/${articleId}`);
      return data;
    },

    postArticle: async (body: FormData): Promise<any> => {
      const { data } = await client.post('/article', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },

    patchArticle: async (articleId: number, body: FormData): Promise<any> => {
      const { data } = await client.patch(`/article/edit/${articleId}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },

    deleteArticle: async (articleId: number): Promise<void> => {
      await client.delete(`/article/${articleId}`);
    },

    postArticlePrefer: async (articleId: number): Promise<void> => {
      await client.post(`/article/prefer/${articleId}`);
    },

    deleteArticlePrefer: async (articleId: number): Promise<void> => {
      await client.delete(`/article/prefer/${articleId}`);
    },
  };
};

export default useArticleApi;
