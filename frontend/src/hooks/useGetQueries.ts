import { useQuery } from 'react-query';
import useTalkApi from '@hooks/apis/useTalkApi';
import useArticleApi from '@hooks/apis/useArticleApi';
import useAuthApi from '@hooks/apis/useAuthApi';

export const useGetAllArticles = () => {
  const { getAllArticles } = useArticleApi();
  return useQuery(['useGetAllArticles'], getAllArticles);
};

export const useGetArticle = (articleId: number) => {
  const { getArticle } = useArticleApi();
  return useQuery(['useGetArticle'], () => getArticle(articleId), {
    enabled: !!articleId,
  });
};

export const useMockFetchData = (index: number) => {
  const { mockFetchData } = useArticleApi();
  return useQuery(['useMockFetchData'], () => mockFetchData(index));
};

export const useGetUserProfile = () => {
  const { getUserProfile } = useAuthApi();
  return useQuery(['useGetUserProfile'], getUserProfile);
};

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = useAuthApi();
  return useQuery(['useGetCheckNickname'], () => getCheckNickname(nickname));
};

export const useGetAllTalks = () => {
  const { getAllTalks } = useTalkApi();
  return useQuery(['useGetAllTalks'], getAllTalks);
};

export const useGetTalk = (talkId: number) => {
  const { getTalk } = useTalkApi();
  return useQuery(['useGetTalk'], () => getTalk(talkId));
};
