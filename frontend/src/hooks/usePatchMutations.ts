import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom } from '@atoms/authAtom';

export const usePatchArticle = () => {
  return useMutation({
    mutationKey: ['patchArticle'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: number; body: FormData }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/article/edit/${id}`, body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
    ),
  });
};

export const usePatchArticleComment = () => {
  return useMutation({
    mutationKey: ['patchArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/article/comment/${id}`, { comment });
      },
    ),
  });
};

export const usePatchTalk = () => {
  return useMutation({
    mutationKey: ['patchTalk'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: number; body: FormData }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/talk/edit/${id}`, body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
    ),
  });
};

export const usePatchTalkComment = () => {
  return useMutation({
    mutationKey: ['patchArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, comment }: { id: number; comment: string }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/talk/comment/${id}`, { comment });
      },
    ),
  });
};

export const usePatchNickname = () => {
  return useMutation({
    mutationKey: ['patchNickname'],
    mutationFn: useAtomCallback((get, set, nickname: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.patch(`/users/nickname`, { nickname });
    }),
  });
};
