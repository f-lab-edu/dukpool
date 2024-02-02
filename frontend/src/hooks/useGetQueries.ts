import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import usePublicApi from '@hooks/apis/usePublicApi';
import { useAtomCallback } from 'jotai/utils';
import { authClientThrowAtom } from '@atoms/authAtom';
import privateAuthApis from '@apis/private/auth';

export const useGetAllArticles = (sortType: string = 'newest') => {
  const { getAllArticles } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['allArticles', sortType],
    queryFn: () => getAllArticles(sortType),
  });
};

export const useGetArticle = (id: number) => {
  const { getArticle } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['article'],
    queryFn: () => getArticle(id),
  });
};

export const useGetAllTalks = (sortType: string = 'newest') => {
  const { getAllTalks } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['allTalks', sortType],
    queryFn: () => getAllTalks(sortType),
  });
};

export const useTalk = (id: number) => {
  const { getTalk } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['talk', id],
    queryFn: () => getTalk(id),
  });
};

export const useSearchData = (text: string = '') => {
  const { getSearchPost } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['search', text],
    queryFn: () => getSearchPost(text),
  });
};

export const useGetTaggedData = (tagName: string) => {
  const { getTaggedPost } = usePublicApi();
  return useSuspenseQuery({
    queryKey: ['nicknameCheck', tagName],
    queryFn: () => getTaggedPost(tagName),
  });
};

export const useGetUserProfile = () => {
  return useSuspenseQuery({
    queryKey: ['userProfile'],
    queryFn: useAtomCallback((get) => {
      const client = get(authClientThrowAtom);
      const { getUserProfile } = privateAuthApis(client);
      return getUserProfile();
    }),
  });
};

export const useGetUserPosts = () => {
  return useSuspenseQuery({
    queryKey: ['userPosts'],
    queryFn: useAtomCallback((get) => {
      const client = get(authClientThrowAtom);
      const { getUserPosts } = privateAuthApis(client);
      return getUserPosts();
    }),
  });
};

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = usePublicApi();
  return useQuery({
    queryKey: ['nicknameCheck', nickname],
    queryFn: () => getCheckNickname(nickname),
    enabled: nickname.length > 2,
  });
};
