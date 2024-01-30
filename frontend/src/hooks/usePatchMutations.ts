import { useMutation } from '@tanstack/react-query';
import useTokenApi from '@hooks/apis/useTokenApi';

export const usePatchArticle = () => {
  const { patchArticle } = useTokenApi();
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
  const { patchArticleComment } = useTokenApi();
  return useMutation({
    mutationKey: ['usePatchArticle'],
    mutationFn: ({ id, comment }: { id: number; comment: string }) =>
      patchArticleComment(id, comment),
  });
};

export const usePatchTalk = () => {
  const { patchTalk } = useTokenApi();
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
