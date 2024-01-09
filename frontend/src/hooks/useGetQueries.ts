import { useQuery } from 'react-query';
import useTalkApi from '@hooks/apis/useTalkApi';
import useArticleApi from '@hooks/apis/useArticleApi';
import useAuthApi from '@hooks/apis/useAuthApi';
import { ArticlePostProps, ArticleProps, TalkProps } from '@utils/mockData';

export const useGetAllArticles = () => {
  const { getAllArticles } = useArticleApi();
  return useQuery<ArticleProps[], Error>(['useGetAllArticles'], () =>
    getAllArticles(),
  );
};

export const useGetArticle = (articleId: number) => {
  const { getArticle } = useArticleApi();
  return useQuery<ArticlePostProps, Error>(
    ['useGetArticle'],
    () => getArticle(articleId),
    {
      enabled: !!articleId,
    },
  );
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
  return useQuery<TalkProps[], Error>(['useGetAllTalks'], () => getAllTalks());
};

export const useGetTalk = (talkId: number) => {
  const { getTalk } = useTalkApi();
  return useQuery<any, Error>(['useGetTalk'], () => getTalk(talkId));
};
