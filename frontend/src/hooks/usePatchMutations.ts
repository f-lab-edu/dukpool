import { useMutation } from '@tanstack/react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const usePatchArticle = () => {
  const { patchArticle } = useArticleApi();
  return useMutation({
    mutationKey: ['usePatchArticle'],
    mutationFn: ({
      articleId,
      formData,
    }: {
      articleId: number;
      formData: FormData;
    }) => patchArticle(articleId, formData),
  });
};

export const usePatchArticleComment = () => {
  const { patchArticleComment } = useArticleApi();
  return useMutation({
    mutationKey: ['usePatchArticle'],
    mutationFn: ({ id, comment }: { id: number; comment: string }) =>
      patchArticleComment(id, comment),
  });
};

export const usePatchTalk = () => {
  const { patchTalk } = useTalkApi();
  return useMutation({
    mutationKey: ['usePatchArticle'],
    mutationFn: ({
      talkId,
      formData,
    }: {
      talkId: number;
      formData: FormData;
    }) => patchTalk(talkId, formData),
  });
};
