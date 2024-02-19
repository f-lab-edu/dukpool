import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom } from '@atoms/authAtom';

export const usePostArticle = () => {
  return useMutation({
    mutationKey: ['postArticle'],
    mutationFn: useAtomCallback((get, _, body: FormData): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post('/content/create', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
  });
};

export const usePostArticlePrefer = () => {
  return useMutation({
    mutationKey: ['postArticlePrefer'],
    mutationFn: useAtomCallback((get, _, content: string): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post(`/like/create`, { content });
    }),
  });
};

export const usePostArticleComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      (
        get,
        _,
        { desc, content }: { desc: string; content: string },
      ): Promise<void> => {
        const client = get(ensuredAuthClientAtom);
        return client.post(`/commentContent/create`, { desc, content });
      },
    ),
  });
};

export const usePostTalk = () => {
  return useMutation({
    mutationKey: ['postTalk'],
    mutationFn: useAtomCallback((get, _, body: FormData): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post('/talkcontents/create', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
  });
};

export const usePostTalkPrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback((get, _, content: string): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post(`/liketalkcontent/create`, { content });
    }),
  });
};

export const usePostTalkComment = () => {
  return useMutation({
    mutationKey: ['postTalkComment'],
    mutationFn: useAtomCallback(
      (
        get,
        _,
        { desc, content }: { desc: string; content: string },
      ): Promise<void> => {
        const client = get(ensuredAuthClientAtom);
        return client.post(`/commentTalkContent/create`, { desc, content });
      },
    ),
  });
};
