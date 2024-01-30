import { noneAuthClientAtom } from '@atoms/authAtom';
import {
  ArticlePostProps,
  MOCK_ARTICLE_DATA,
  MOCK_ARTICLE_POST_DATA,
  MOCK_SEARCH_DATA,
  MOCK_TALK_DATA,
  MOCK_TALK_POST_DATA,
  SearchDataProps,
  TalkPostProps,
} from '@utils/mockData';
import { useAtomValue } from 'jotai';

type ArticleApis = {
  getAllArticles: (sortType: string) => Promise<ArticlePostProps[]>;
  getArticle: (articleId: number) => Promise<ArticlePostProps>;
  getAllTalks: (sortType: string) => Promise<TalkPostProps[]>;
  getTalk: (talkId: number) => Promise<any>;
  getSearchData: (text: string) => Promise<SearchDataProps>;
};

const usePublicApi = (): ArticleApis => {
  const defaultClient = useAtomValue(noneAuthClientAtom);
  console.log(defaultClient);
  return {
    getAllArticles: async (sortType: string): Promise<ArticlePostProps[]> => {
      // const { data } = await defaultClient.get(`/article/${sortType}`);
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_DATA;
    },

    getArticle: async (articleId): Promise<ArticlePostProps> => {
      // const { data } = await defaultClient.get(`/article/${articleId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(articleId);
      return MOCK_ARTICLE_POST_DATA;
    },
    getAllTalks: async (sortType: string): Promise<TalkPostProps[]> => {
      // const { data } = await defaultClient.get('/talks');
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TALK_DATA;
    },

    getTalk: async (talkId): Promise<any> => {
      // const { data } = await defaultClient.get(`/talk/${talkId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(talkId);
      return MOCK_TALK_POST_DATA;
    },
    getSearchData: async (text): Promise<SearchDataProps> => {
      // const { data } = await defaultClient.get(`/article/${articleId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(text);
      return MOCK_SEARCH_DATA;
    },
  };
};

export default usePublicApi;
