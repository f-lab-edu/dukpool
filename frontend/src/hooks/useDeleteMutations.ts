import { useMutation } from '@tanstack/react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const useDeleteArticle = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation({
    mutationKey: ['deleteArticlePost'],
    mutationFn: deleteArticle,
  });
};

export const useDeleteTalk = () => {
  const { deleteTalk } = useTalkApi();
  return useMutation({
    mutationKey: ['deleteTalkPost'],
    mutationFn: deleteTalk,
  });
};

export const useDeleteArticlePrefer = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: deleteArticle,
  });
};

export const useDeleteTalkPrefer = () => {
  const { deleteTalkPrefer } = useTalkApi();
  return useMutation({
    mutationKey: ['deleteTalkPrefer'],
    mutationFn: deleteTalkPrefer,
  });
};
