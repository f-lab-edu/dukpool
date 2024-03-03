import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom } from '@atoms/authAtom';
import { ContentResponse } from 'src/@types/content';
import { useNavigate } from 'react-router-dom';
import useApiError from '@hooks/useApiError';

export const usePostArticle = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['postArticle'],
    mutationFn: useAtomCallback((get, _, body: FormData) => {
      const client = get(ensuredAuthClientAtom);
      return client.post('/content/create', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
    onSuccess: ({ data }: { data: { data: ContentResponse } }) => {
      navigate(`/article/${data.data.id}`, { replace: true });
    },
  });
};

export const usePostArticlePrefer = () => {
  const queryClient = useQueryClient();
  const { defaultMutationHandler } = useApiError();
  return useMutation({
    mutationKey: ['postArticlePrefer'],
    mutationFn: useAtomCallback((get, _, content: string): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post(`/like/create`, { content });
    }),
    onMutate: async (contentId: string) => {
      queryClient.cancelQueries({ queryKey: ['postArticlePrefer'] });
      const prevContent = queryClient.getQueryData(['article', contentId]);
      queryClient.setQueryData(
        ['article', contentId],
        (old: ContentResponse) => ({
          ...old,
          isLiked: true,
          likeCount: old.likeCount + 1,
        }),
      );
      return { prevContent };
    },
    onError: (err, contentId, context) => {
      defaultMutationHandler(err);
      queryClient.setQueryData(['article', contentId], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const usePostArticleComment = () => {
  const queryClient = useQueryClient();
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
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const usePostTalk = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['postTalk'],
    mutationFn: useAtomCallback((get, _, body: FormData) => {
      const client = get(ensuredAuthClientAtom);
      return client.post('/talkcontents/create', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
    onSuccess: ({ data }: { data: { data: ContentResponse } }) => {
      navigate(`/talk/${data.data.id}`, { replace: true });
    },
  });
};

export const usePostTalkPrefer = () => {
  const queryClient = useQueryClient();
  const { defaultMutationHandler } = useApiError();
  return useMutation({
    mutationKey: ['postTalkPrefer'],
    mutationFn: useAtomCallback((get, _, content: string): Promise<void> => {
      const client = get(ensuredAuthClientAtom);
      return client.post(`/liketalkcontent/create`, { content });
    }),
    onMutate: async (contentId: string) => {
      queryClient.cancelQueries({ queryKey: ['postTalkPrefer'] });
      const prevContent = queryClient.getQueryData(['talk', contentId]);
      queryClient.setQueryData(['talk', contentId], (old: ContentResponse) => ({
        ...old,
        isLiked: true,
        likeCount: old.likeCount + 1,
      }));
      return { prevContent };
    },
    onError: (err, contentId, context) => {
      defaultMutationHandler(err);
      queryClient.setQueryData(['talk', contentId], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['talk'] });
    },
  });
};

export const usePostTalkComment = () => {
  const queryClient = useQueryClient();
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
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['talk'] });
    },
  });
};
