import { useMutation } from 'react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const usePostArticle = () => {
  const { postArticle } = useArticleApi();
  return useMutation<void, void, number, unknown>(
    ['usePostArticle'],
    (formData: any) => postArticle(formData),
  );
};

export const usePostTalk = () => {
  const { postTalk } = useTalkApi();
  return useMutation<void, void, number, unknown>(
    ['usePostTalk'],
    (formData: any) => postTalk(formData),
  );
};

export const usePostArticlePrefer = () => {
  const { postArticlePrefer } = useArticleApi();
  return useMutation<void, void, number, unknown>(
    ['usePostArticlePrefer'],
    (articleId: number) => postArticlePrefer(articleId),
  );
};

export const usePostTalkPrefer = () => {
  const { postTalkPrefer } = useTalkApi();
  return useMutation<void, void, number, unknown>(
    ['usePostTalkPrefer'],
    (talkId: number) => postTalkPrefer(talkId),
  );
};
