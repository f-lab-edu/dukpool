import {
  useQuery,
  useSuspenseInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom, defaultClientAtom } from '@atoms/authAtom';
import {
  AllContentResponse,
  ContentResponse,
  SearchResponse,
  InfiniteQueryProps,
} from 'src/@types/content';
import { UserDataResponse } from 'src/@types/user';

export const useAllArticles = (sortType: string = '') => {
  const getArticle = useAtomCallback(
    async (get, set, sortType, pageParam): Promise<InfiniteQueryProps> => {
      const client = get(defaultClientAtom);
      const { data: resp } = await client.get(
        `/content?sortType=${sortType}&page=${pageParam}&take=${20}`,
      );
      const { data, meta } = resp;
      return { data, meta };
    },
  );
  return useSuspenseInfiniteQuery({
    queryKey: ['allArticles', sortType],
    queryFn: ({ pageParam }) => getArticle(sortType, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hasNextPage) return lastPage.meta.page + 1;
      return undefined;
    },
  });
};

export const useMainArticles = () => {
  return useSuspenseQuery({
    queryKey: ['mainArticles'],
    queryFn: useAtomCallback(async (get): Promise<AllContentResponse[]> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/content?page=1&take=10`);
      return data.data;
    }),
  });
};

export const useArticle = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['article', id],
    queryFn: useAtomCallback(async (get): Promise<ContentResponse> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/content/${id}`);
      return data.data.content;
    }),
  });
};

export const useAllTalks = (sortType: string = '') => {
  const getArticle = useAtomCallback(
    async (get, set, sortType, pageParam): Promise<InfiniteQueryProps> => {
      const client = get(defaultClientAtom);
      const { data: resp } = await client.get(
        `/talkcontents?sortType=${sortType}&page=${pageParam}&take=${20}`,
      );
      const { data, meta } = resp;
      return { data, meta };
    },
  );
  return useSuspenseInfiniteQuery({
    queryKey: ['allTalks', sortType],
    queryFn: ({ pageParam }) => getArticle(sortType, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.meta.hasNextPage) return lastPage.meta.page + 1;
      return undefined;
    },
  });
};

export const useMainTalks = () => {
  return useSuspenseQuery({
    queryKey: ['mainTalks'],
    queryFn: useAtomCallback(async (get): Promise<AllContentResponse[]> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/talkcontents?page=1&take=10`);
      return data.data;
    }),
  });
};

export const useTalk = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['talk', id],
    queryFn: useAtomCallback(async (get): Promise<ContentResponse> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/talkcontents/${id}`);
      return data.data.talkContent;
    }),
  });
};

export const useSearch = (searchText: string = '') => {
  return useSuspenseQuery({
    queryKey: ['search', searchText],
    queryFn: useAtomCallback(async (get): Promise<SearchResponse> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/search?searchQuery=${searchText}`);
      return data.data;
    }),
  });
};

export const useTagged = (tagName: string) => {
  return useSuspenseQuery({
    queryKey: ['tagged', tagName],
    queryFn: useAtomCallback(async (get): Promise<SearchResponse> => {
      const client = get(defaultClientAtom);
      const { data } = await client.get(`/search?tag=${tagName}`);
      return data.data;
    }),
  });
};

export const useUserData = () => {
  return useSuspenseQuery({
    queryKey: ['userData'],
    queryFn: useAtomCallback(async (get): Promise<UserDataResponse> => {
      const client = get(ensuredAuthClientAtom);
      const { data } = await client.get('/auth/profile');
      return data.data;
    }),
  });
};

export const useCheckNickname = (nickname: string, currentNickname: string) => {
  return useQuery({
    queryKey: ['nicknameCheck', nickname],
    queryFn: useAtomCallback(async (get): Promise<boolean> => {
      const client = get(ensuredAuthClientAtom);
      const { data } = await client.get(`/auth/check?nickname=${nickname}`);
      return data.data.isDuplicate;
    }),
    enabled: nickname.length >= 2 && currentNickname !== nickname,
  });
};
