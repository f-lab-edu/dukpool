import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredClientAtom, defaultClientAtom } from '@atoms/authAtom';
import {
  MOCK_ARTICLE_DATA,
  MOCK_ARTICLE_POST_DATA,
  MOCK_SEARCH_DATA,
  MOCK_TAGGED_DATA,
  MOCK_TALK_POST_DATA,
  MOCK_USER_ARTICLES_DATA,
  MOCK_USER_DATA,
} from '@utils/mockData';
import { ArticleResponse } from 'src/@types/article';
import { TalkResponse } from 'src/@types/talk';
import { SearchResponse } from 'src/@types/search';
import { TaggedPostResponse } from 'src/@types/tagged';
import { ProfileResponse, UserPostsResponse } from 'src/@types/user';

export const useAllArticles = (sortType: string) => {
  return useSuspenseQuery({
    queryKey: ['allArticles', sortType],
    queryFn: useAtomCallback(async (get): Promise<ArticleResponse[]> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/article/${sortType}`);
      // return data;
      console.log(client, sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_DATA;
    }),
  });
};

export const useArticle = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['article', id],
    queryFn: useAtomCallback(async (get): Promise<ArticleResponse> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/article/${id}`);
      // return data;
      console.log(client, id);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_POST_DATA;
    }),
  });
};

export const useAllTalks = (sortType: string = 'newest') => {
  return useSuspenseQuery({
    queryKey: ['allTalks', sortType],
    queryFn: useAtomCallback(async (get): Promise<TalkResponse[]> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/talk/${sortType}`);
      // return data;
      console.log(client, sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_ARTICLE_DATA;
    }),
  });
};

export const useTalk = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['talk', id],
    queryFn: useAtomCallback(async (get): Promise<TalkResponse> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/talk/${id}`);
      // return data;
      console.log(client, id);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TALK_POST_DATA;
    }),
  });
};

export const useSearch = (text: string = '') => {
  return useSuspenseQuery({
    queryKey: ['search', text],
    queryFn: useAtomCallback(async (get): Promise<SearchResponse> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/search/${text}`);
      // return data;
      console.log(client, text);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_SEARCH_DATA;
    }),
  });
};

export const useTagged = (tagName: string) => {
  return useSuspenseQuery({
    queryKey: ['search', tagName],
    queryFn: useAtomCallback(async (get): Promise<TaggedPostResponse> => {
      const client = get(defaultClientAtom);
      // const { data } = await client.get(`/tagged/${tagName}`);
      // return data;
      console.log(client, tagName);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TAGGED_DATA;
    }),
  });
};

export const useProfile = () => {
  return useSuspenseQuery({
    queryKey: ['userProfile'],
    queryFn: useAtomCallback(async (get): Promise<ProfileResponse> => {
      const client = get(ensuredClientAtom);
      // const { data } = await client.get('/users');
      // return data;
      console.log(client);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_DATA;
    }),
  });
};

export const useUserPosts = () => {
  return useSuspenseQuery({
    queryKey: ['userPosts'],
    queryFn: useAtomCallback(async (get): Promise<UserPostsResponse> => {
      const client = get(ensuredClientAtom);
      // const { data } = await client.get('/user-posts');
      // return data;
      console.log(client);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_ARTICLES_DATA;
    }),
  });
};

export const useCheckNickname = (nickname: string) => {
  return useQuery({
    queryKey: ['nicknameCheck', nickname],
    queryFn: useAtomCallback(async (get): Promise<boolean> => {
      const client = get(ensuredClientAtom);
      const { data } = await client.get(`/users/check?nickname=${nickname}`);
      return data;
    }),
    enabled: nickname.length > 2,
  });
};
