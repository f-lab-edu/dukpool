import { useSuspenseQuery } from '@tanstack/react-query';
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

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = useAuthApi();
  return useSuspenseQuery({
    queryKey: ['nicknameCheck'],
    queryFn: () => getCheckNickname(nickname),
  });
};

export const useGetAllTalks = () => {
  const { getAllTalks } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['allTalks'],
    queryFn: getAllTalks,
  });
};

export const useTalk = (id: number) => {
  const { getTalk } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['talk', id],
    queryFn: () => getTalk(id),
  });
};
