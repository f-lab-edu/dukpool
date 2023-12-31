import { useQuery } from 'react-query';
import useTalkApi from '@hooks/apis/useTalkApi';
import useArticleApi from '@hooks/apis/useArticleApi';
import useAuthApi from '@hooks/apis/useAuthApi';

export const useGetAllArticles = () => {
  const { getAllArticles } = useArticleApi();
  return useQuery<any, Error>(['useGetAllArticles'], () => getAllArticles());
};

export const useGetArticle = (articleId: number) => {
  const { getArticle } = useArticleApi();
  return useQuery<any, Error>(['useGetArticle'], () => getArticle(articleId));
};

export const useMockFetchData = (index: number) => {
  const { mockFetchData } = useArticleApi();
  return useQuery<any, Error>(['useMockFetchData'], () => mockFetchData(index));
};

export const useGetUserProfile = () => {
  const { getUserProfile } = useAuthApi();
  return useQuery<any, Error>(['useGetUserProfile'], () => getUserProfile());
};

export const useGetCheckNickname = (nickname: string) => {
  const { getCheckNickname } = useAuthApi();
  return useQuery<any, Error>(['useGetCheckNickname'], () =>
    getCheckNickname(nickname),
  );
};

export const useGetAllTalks = () => {
  const { getAllTalks } = useTalkApi();
  return useQuery<any, Error>(['useGetAllTalks'], () => getAllTalks());
};

export const useGetTalk = (talkId: number) => {
  const { getTalk } = useTalkApi();
  return useQuery<any, Error>(['useGetTalk'], () => getTalk(talkId));
};
