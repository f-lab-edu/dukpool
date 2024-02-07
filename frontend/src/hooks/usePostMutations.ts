import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredClientAtom } from '@atoms/authAtom';

export const usePostArticle = () => {
  return useMutation({
    mutationKey: ['postArticle'],
    mutationFn: useAtomCallback((get, _, body: FormData): Promise<void> => {
      const client = get(ensuredClientAtom);
      return client.post('/article', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
  });
};

export const usePostArticlePrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback((get, _, id: number): Promise<void> => {
      const client = get(ensuredClientAtom);
      return client.post(`/article/prefer/${id}`);
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
        { id, comment }: { id: number; comment: string },
      ): Promise<void> => {
        const client = get(ensuredClientAtom);
        return client.post(`/article/comment/${id}`, { comment });
      },
    ),
  });
};

export const usePostTalk = () => {
  return useMutation({
    mutationKey: ['postTalk'],
    mutationFn: useAtomCallback((get, _, body: FormData): Promise<void> => {
      const client = get(ensuredClientAtom);
      return client.post('/talk', body, {
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
    mutationFn: useAtomCallback((get, _, id: number): Promise<void> => {
      const client = get(ensuredClientAtom);
      return client.post(`/talk/prefer/${id}`);
    }),
  });
};

export const usePostTalkComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      (
        get,
        _,
        { id, comment }: { id: number; comment: string },
      ): Promise<void> => {
        const client = get(ensuredClientAtom);
        return client.post(`/talk/comment/${id}`, { comment });
      },
    ),
  });
};
