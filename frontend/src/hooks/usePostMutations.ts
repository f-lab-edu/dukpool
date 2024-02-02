import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { authClientThrowAtom } from '@atoms/authAtom';
import privateArticleApis from '@apis/private/article';
import privateTalkApis from '@apis/private/talk';

export const usePostArticle = () => {
  return useMutation({
    mutationKey: ['postArticle'],
    mutationFn: useAtomCallback((get, set, body: FormData) => {
      const client = get(authClientThrowAtom);
      const { postArticle } = privateArticleApis(client);
      return postArticle(body);
    }),
  });
};

export const usePostArticlePrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { postArticlePrefer } = privateArticleApis(client);
      return postArticlePrefer(id);
    }),
  });
};

export const usePostArticleComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(authClientThrowAtom);
        const { postArticleComment } = privateArticleApis(client);
        return postArticleComment(id, comment);
      },
    ),
  });
};

export const usePostTalk = () => {
  return useMutation({
    mutationKey: ['postTalk'],
    mutationFn: useAtomCallback((get, set, body: FormData) => {
      const client = get(authClientThrowAtom);
      const { postTalk } = privateTalkApis(client);
      return postTalk(body);
    }),
  });
};

export const usePostTalkPrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { postTalkPrefer } = privateTalkApis(client);
      return postTalkPrefer(id);
    }),
  });
};

export const usePostTalkComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(authClientThrowAtom);
        const { postTalkComment } = privateTalkApis(client);
        return postTalkComment(id, comment);
      },
    ),
  });
};
