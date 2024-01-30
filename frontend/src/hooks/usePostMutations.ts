import { useMutation } from '@tanstack/react-query';
import useTokenApi from '@hooks/apis/useTokenApi';

export const usePostArticle = () => {
  const { postArticle } = useTokenApi();
  return useMutation({
    mutationKey: ['usePostArticle'],
    mutationFn: postArticle,
  });
};

export const usePostTalk = () => {
  const { postTalk } = useTokenApi();
  return useMutation({ mutationKey: ['usePostTalk'], mutationFn: postTalk });
};

export const usePostArticlePrefer = () => {
  const { postArticlePrefer } = useTokenApi();
  return useMutation({
    mutationKey: ['usePostArticlePrefer'],
    mutationFn: postArticlePrefer,
  });
};

export const usePostTalkPrefer = () => {
  const { postTalkPrefer } = useTokenApi();
  return useMutation({
    mutationKey: ['usePostTalkPrefer'],
    mutationFn: postTalkPrefer,
  });
};

export const usePostArticleComment = () => {
  const { postArticleComment } = useTokenApi();
  return useMutation({
    mutationKey: ['usePostArticleComment'],
    mutationFn: ({ id, comment }: { id: number; comment: string }) =>
      postArticleComment(id, comment),
  });
};

export const usePostNickname = () => {
  const { postNickname } = useTokenApi();
  return useMutation({
    mutationKey: ['usePostNickname'],
    mutationFn: postNickname,
  });
};
