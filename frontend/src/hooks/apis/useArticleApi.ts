import useClient from '@hooks/useClient';
import {
  ArticlePostProps,
  MOCK_ARTICLE_DATA,
  MOCK_ARTICLE_POST_DATA,
  MOCK_SEARCH_DATA,
  SearchDataProps,
} from '@utils/mockData';

type ArticleApis = {
  mockFetchData: (index: number) => Promise<any>;
  getAllArticles: (sortType: string) => Promise<ArticlePostProps[]>;
  getArticle: (articleId: number) => Promise<ArticlePostProps>;
  getSearchData: (text: string) => Promise<SearchDataProps>;
  postArticle: (body: FormData) => Promise<any>;
  patchArticle: (articleId: number, body: FormData) => Promise<any>;
  deleteArticle: (articleId: number) => Promise<void>;
  postArticlePrefer: (articleId: number) => Promise<void>;
  deleteArticlePrefer: (articleId: number) => Promise<void>;
  postArticleComment: (articleId: number, comment: string) => Promise<void>;
  patchArticleComment: (articleId: number, comment: string) => Promise<void>;
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

    getAllArticles: async (sortType: string): Promise<ArticlePostProps[]> => {
      // const { data } = await client.get(`/article/${sortType}`);
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_DATA;
    },

    getArticle: async (articleId): Promise<ArticlePostProps> => {
      // const { data } = await client.get(`/article/${articleId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(articleId);
      return MOCK_ARTICLE_POST_DATA;
    },

    getSearchData: async (text): Promise<SearchDataProps> => {
      // const { data } = await client.get(`/article/${articleId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(text);
      return MOCK_SEARCH_DATA;
    },

    postArticle: async (body: FormData): Promise<any> => {
      const { data } = await client.post('/article', body);
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

    postArticleComment: async (id: number, comment: string): Promise<void> => {
      await client.post(`/article/comment/${id}`, { comment });
    },

    patchArticleComment: async (id: number, comment: string): Promise<void> => {
      await client.patch(`/article/comment/${id}`, { comment });
    },
  };
};

export default useArticleApi;
