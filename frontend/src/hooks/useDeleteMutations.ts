import { useMutation } from '@tanstack/react-query';
import useTokenApi from '@hooks/apis/useTokenApi';

export const useDeleteArticle = () => {
  const { deleteArticle } = useTokenApi();
  return useMutation({
    mutationKey: ['deleteArticlePost'],
    mutationFn: deleteArticle,
  });
};

export const useDeleteTalk = () => {
  const { deleteTalk } = useTokenApi();
  return useMutation({
    mutationKey: ['deleteTalkPost'],
    mutationFn: deleteTalk,
  });
};

export const useDeleteArticlePrefer = () => {
  const { deleteArticle } = useTokenApi();
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: deleteArticle,
  });
};

export const useDeleteTalkPrefer = () => {
  const { deleteTalkPrefer } = useTokenApi();
  return useMutation({
    mutationKey: ['deleteTalkPrefer'],
    mutationFn: deleteTalkPrefer,
  });
};
