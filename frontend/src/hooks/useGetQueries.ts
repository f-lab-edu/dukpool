import { useSuspenseQuery } from '@tanstack/react-query';
import useTalkApi from '@hooks/apis/useTalkApi';
import useArticleApi from '@hooks/apis/useArticleApi';
import useAuthApi from '@hooks/apis/useAuthApi';

export const useGetAllArticles = () => {
  const { getAllArticles } = useArticleApi();
  return useSuspenseQuery({
    queryKey: ['useGetAllArticles'],
    queryFn: getAllArticles,
  });
};

export const useGetArticle = (articleId: number) => {
  const { getArticle } = useArticleApi();
  return useSuspenseQuery({
    queryKey: ['useGetArticle'],
    queryFn: () => getArticle(articleId),
  });
};

export const useGetUserProfile = () => {
  const { getUserProfile } = useAuthApi();
  return useSuspenseQuery({
    queryKey: ['useGetUserProfile'],
    queryFn: getUserProfile,
  });
};

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = useAuthApi();
  return useSuspenseQuery({
    queryKey: ['useGetCheckNickname'],
    queryFn: () => getCheckNickname(nickname),
  });
};

export const useGetAllTalks = () => {
  const { getAllTalks } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['useGetAllTalks'],
    queryFn: getAllTalks,
  });
};

export const useGetTalk = (talkId: number) => {
  const { getTalk } = useTalkApi();
  return useSuspenseQuery({
    queryKey: ['useGetTalk'],
    queryFn: () => getTalk(talkId),
  });
};
