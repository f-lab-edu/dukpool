import { useMutation } from '@tanstack/react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';
import useAuthApi from './apis/useAuthApi';

export const usePostArticle = () => {
  const { postArticle } = useArticleApi();
  return useMutation({
    mutationKey: ['usePostArticle'],
    mutationFn: postArticle,
  });
};

export const usePostTalk = () => {
  const { postTalk } = useTalkApi();
  return useMutation({ mutationKey: ['usePostTalk'], mutationFn: postTalk });
};

export const usePostArticlePrefer = () => {
  const { postArticlePrefer } = useArticleApi();
  return useMutation({
    mutationKey: ['usePostArticlePrefer'],
    mutationFn: postArticlePrefer,
  });
};

export const usePostTalkPrefer = () => {
  const { postTalkPrefer } = useTalkApi();
  return useMutation({
    mutationKey: ['usePostTalkPrefer'],
    mutationFn: postTalkPrefer,
  });
};

export const usePostArticleComment = () => {
  const { postArticleComment } = useArticleApi();
  return useMutation({
    mutationKey: ['usePostArticleComment'],
    mutationFn: ({ id, comment }: { id: number; comment: string }) =>
      postArticleComment(id, comment),
  });
};

export const usePostNickname = () => {
  const { postNickname } = useAuthApi();
  return useMutation({
    mutationKey: ['usePostNickname'],
    mutationFn: (nickname: string) => postNickname(nickname),
  });
};
