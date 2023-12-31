import { useMutation } from 'react-query';
import useArticleApi from '@hooks/apis/useArticleApi';
import useTalkApi from '@hooks/apis/useTalkApi';

export const usePostArticle = () => {
  const { postArticle } = useArticleApi();
  return useMutation(['usePostArticle'], postArticle);
};

export const usePostTalk = () => {
  const { postTalk } = useTalkApi();
  return useMutation(['usePostTalk'], postTalk);
};

export const usePostArticlePrefer = () => {
  const { postArticlePrefer } = useArticleApi();
  return useMutation(['usePostArticlePrefer'], postArticlePrefer);
};

export const usePostTalkPrefer = () => {
  const { postTalkPrefer } = useTalkApi();
  return useMutation(['usePostTalkPrefer'], postTalkPrefer);
};
