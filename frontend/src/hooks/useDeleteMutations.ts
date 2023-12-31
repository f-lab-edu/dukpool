import { useMutation } from 'react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const useDeleteArticle = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation(['deleteArticlePost'], deleteArticle);
};

export const useDeleteTalk = () => {
  const { deleteTalk } = useTalkApi();
  return useMutation(['deleteTalkPost'], deleteTalk);
};

export const useDeleteArticlePrefer = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation(['deleteArticlePrefer'], deleteArticle);
};

export const useDeleteTalkPrefer = () => {
  const { deleteTalkPrefer } = useTalkApi();
  return useMutation(['deleteTalkPrefer'], deleteTalkPrefer);
};
