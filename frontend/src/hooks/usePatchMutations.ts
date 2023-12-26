import { useMutation } from 'react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const usePatchArticle = () => {
  const { patchArticle } = useArticleApi();
  return useMutation<any, unknown, { articleId: number; formData: FormData }>(
    ['usePatchArticle'],
    ({ articleId, formData }: { articleId: number; formData: FormData }) =>
      patchArticle(articleId, formData),
  );
};

export const usePatchTalk = () => {
  const { patchTalk } = useTalkApi();
  return useMutation<any, unknown, { talkId: number; formData: FormData }>(
    ['usePatchArticle'],
    ({ talkId, formData }: { talkId: number; formData: FormData }) =>
      patchTalk(talkId, formData),
  );
};
