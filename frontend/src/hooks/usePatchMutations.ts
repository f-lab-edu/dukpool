import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { authClientThrowAtom } from '@atoms/authAtom';
import privateArticleApis from '@apis/private/article';
import privateTalkApis from '@apis/private/talk';
import privateAuthApis from '@apis/private/auth';

export const usePatchArticle = () => {
  return useMutation({
    mutationKey: ['patchArticle'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: number; body: FormData }) => {
        const client = get(authClientThrowAtom);
        const { patchArticle } = privateArticleApis(client);
        return patchArticle(id, body);
      },
    ),
  });
};

export const usePatchArticleComment = () => {
  return useMutation({
    mutationKey: ['patchArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(authClientThrowAtom);
        const { patchArticleComment } = privateArticleApis(client);
        return patchArticleComment(id, comment);
      },
    ),
  });
};

export const usePatchTalk = () => {
  return useMutation({
    mutationKey: ['patchTalk'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: number; body: FormData }) => {
        const client = get(authClientThrowAtom);
        const { patchTalk } = privateTalkApis(client);
        return patchTalk(id, body);
      },
    ),
  });
};

export const usePatchTalkComment = () => {
  return useMutation({
    mutationKey: ['patchArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(authClientThrowAtom);
        const { patchTalkComment } = privateTalkApis(client);
        return patchTalkComment(id, comment);
      },
    ),
  });
};

export const usePatchNickname = () => {
  return useMutation({
    mutationKey: ['patchNickname'],
    mutationFn: useAtomCallback((get, set, nickname: string) => {
      const client = get(authClientThrowAtom);
      const { patchNickname } = privateAuthApis(client);
      return patchNickname(nickname);
    }),
  });
};
