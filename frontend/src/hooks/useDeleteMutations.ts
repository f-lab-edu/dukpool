import { useMutation } from 'react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const useDeleteArticle = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation<void, void, number>(
    ['useDeleteArticle'],
    (articleId: number) => deleteArticle(articleId),
  );
};

export const useDeleteTalk = () => {
  const { deleteTalk } = useTalkApi();
  return useMutation<void, void, number>(['useDeleteTalk'], (talkId: number) =>
    deleteTalk(talkId),
  );
};

export const useDeleteArticlePrefer = () => {
  const { deleteArticle } = useArticleApi();
  return useMutation<void, void, number>(
    ['usePostArticlePrefer'],
    (articleId: number) => deleteArticle(articleId),
  );
};

export const useDeleteTalkPrefer = () => {
  const { deleteTalkPrefer } = useTalkApi();
  return useMutation<void, void, number>(
    ['usePostTalkPrefer'],
    (talkId: number) => deleteTalkPrefer(talkId),
  );
};
