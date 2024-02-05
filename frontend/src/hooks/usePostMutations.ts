import { useMutation } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { authClientThrowAtom } from '@atoms/authAtom';

export const usePostArticle = () => {
  return useMutation({
    mutationKey: ['postArticle'],
    mutationFn: useAtomCallback(
      async (get, _, body: FormData): Promise<void> => {
        const client = get(authClientThrowAtom);
        return await client.post('/article', body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
    ),
  });
};

export const usePostArticlePrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback(async (get, _, id: number): Promise<void> => {
      const client = get(authClientThrowAtom);
      return await client.post(`/article/prefer/${id}`);
    }),
  });
};

export const usePostArticleComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      async (
        get,
        _,
        { id, comment }: { id: number; comment: string },
      ): Promise<void> => {
        const client = get(authClientThrowAtom);
        return await client.post(`/article/comment/${id}`, { comment });
      },
    ),
  });
};

export const usePostTalk = () => {
  return useMutation({
    mutationKey: ['postTalk'],
    mutationFn: useAtomCallback(
      async (get, _, body: FormData): Promise<void> => {
        const client = get(authClientThrowAtom);
        return await client.post('/talk', body, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      },
    ),
  });
};

export const usePostTalkPrefer = () => {
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback(async (get, _, id: number): Promise<void> => {
      const client = get(authClientThrowAtom);
      return await client.post(`/talk/prefer/${id}`);
    }),
  });
};

export const usePostTalkComment = () => {
  return useMutation({
    mutationKey: ['postArticleComment'],
    mutationFn: useAtomCallback(
      async (
        get,
        _,
        { id, comment }: { id: number; comment: string },
      ): Promise<void> => {
        const client = get(authClientThrowAtom);
        return await client.post(`/talk/comment/${id}`, { comment });
      },
    ),
  });
};
