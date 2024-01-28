import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import useTalkApi from '@hooks/apis/useTalkApi';
import useArticleApi from '@hooks/apis/useArticleApi';
import useAuthApi from '@hooks/apis/useAuthApi';

export const useGetAllArticles = (sortType: string = 'newest') => {
  const { getAllArticles } = useArticleApi();
  return useSuspenseQuery({
    queryKey: ['allArticles', sortType],
    queryFn: () => getAllArticles(sortType),
  });
};

export const useGetArticle = (id: number) => {
  const { getArticle } = useArticleApi();
  return useSuspenseQuery({
    queryKey: ['article'],
    queryFn: () => getArticle(id),
  });
};

export const useGetUserProfile = () => {
  const { getUserProfile } = useAuthApi();
  return useSuspenseQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });
};

export const useGetUserPosts = () => {
  const { getUserPosts } = useAuthApi();
  return useSuspenseQuery({
    queryKey: ['userPosts'],
    queryFn: getUserPosts,
  });
};

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = useAuthApi();
  return useQuery({
    queryKey: ['nicknameCheck', nickname],
    queryFn: () => getCheckNickname(nickname),
    enabled: nickname.length > 2,
  });
};

export const useGetAllTalks = (sortType: string = 'newest') => {
  const { getAllTalks } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['allTalks', sortType],
    queryFn: () => getAllTalks(sortType),
  });
};

export const useTalk = (id: number) => {
  const { getTalk } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['talk', id],
    queryFn: () => getTalk(id),
  });
};

export const useSearchData = (text: string = '') => {
  const { getSearchData } = useArticleApi();
  return useSuspenseQuery({
    queryKey: ['search', text],
    queryFn: () => getSearchData(text),
  });
};
