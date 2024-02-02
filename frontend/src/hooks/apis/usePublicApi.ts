import { useAtomValue } from 'jotai';
import { defaultClientAtom } from '@atoms/authAtom';
import {
  PublicApis,
  ArticleResponse,
  SearchResponse,
  TaggedPostResponse,
  TalkResponse,
  ValidationResponse,
} from '@hooks/apis/type';
import {
  MOCK_ARTICLE_DATA,
  MOCK_ARTICLE_POST_DATA,
  MOCK_SEARCH_DATA,
  MOCK_TAGGED_DATA,
  MOCK_TALK_DATA,
  MOCK_TALK_POST_DATA,
} from '@utils/mockData';

const usePublicApi = (): PublicApis => {
  const client = useAtomValue(defaultClientAtom);
  console.log(client);
  return {
    getAllArticles: async (sortType): Promise<ArticleResponse[]> => {
      // const { data } = await client.get(`/article/${sortType}`);
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_DATA;
    },

    getArticle: async (id): Promise<ArticleResponse> => {
      // const { data } = await client.get(`/article/${id}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(id);
      return MOCK_ARTICLE_POST_DATA;
    },

    getAllTalks: async (sortType): Promise<TalkResponse[]> => {
      // const { data } = await client.get('/talks');
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TALK_DATA;
    },

    getTalk: async (id): Promise<TalkResponse> => {
      // const { data } = await client.get(`/talk/${id}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(id);
      return MOCK_TALK_POST_DATA;
    },

    getSearchPost: async (text): Promise<SearchResponse> => {
      // const { data } = await client.get(`/search/${text}`);
      // return data;
      console.log(text);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_SEARCH_DATA;
    },

    getTaggedPost: async (tagName): Promise<TaggedPostResponse> => {
      // const { data } = await client.get(`/tagged/${tagName}`);
      // return data;
      console.log(tagName);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TAGGED_DATA;
    },

    getCheckNickname: async (nickname: string): Promise<ValidationResponse> => {
      const { data } = await client.get(`/users/check?nickname=${nickname}`);
      return data;
    },
  };
};

export default usePublicApi;
