import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom } from '@atoms/authAtom';

export const usePatchArticle = () => {
  return useMutation({
    mutationKey: ['patchArticle'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: string; body: FormData }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/content/${id}`, body, {
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
      (
        get,
        set,
        { id, desc, content }: { id: string; desc: string; content: string },
      ) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/commentContent/${id}`, { desc, content });
      },
    ),
  });
};

export const usePatchTalk = () => {
  return useMutation({
    mutationKey: ['patchTalk'],
    mutationFn: useAtomCallback(
      (get, set, { id, body }: { id: string; body: FormData }) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/talkcontents/${id}`, body, {
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
      (
        get,
        set,
        { id, desc, content }: { id: string; desc: string; content: string },
      ) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/commentTalkContent/${id}`, { desc, content });
      },
    ),
  });
};

export const usePatchNickname = () => {
  return useMutation({
    mutationKey: ['patchNickname'],
    mutationFn: useAtomCallback((get, set, nickname: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.patch(`/auth`, { nickname });
    }),
  });
};
