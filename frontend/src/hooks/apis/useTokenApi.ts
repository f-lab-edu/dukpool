import useAuthClient from '@hooks/useAuthClient';
import {
  MOCK_USER_ARTICLES_DATA,
  MOCK_USER_DATA,
  UserArticleDataProps,
} from '@utils/mockData';

type ArticleApis = {
  postArticle: (body: FormData) => Promise<any>;
  patchArticle: (articleId: number, body: FormData) => Promise<any>;
  deleteArticle: (articleId: number) => Promise<void>;
  postArticlePrefer: (articleId: number) => Promise<void>;
  deleteArticlePrefer: (articleId: number) => Promise<void>;
  postArticleComment: (articleId: number, comment: string) => Promise<void>;
  patchArticleComment: (articleId: number, comment: string) => Promise<void>;
  postTalk: (body: FormData) => Promise<any>;
  patchTalk: (id: number, body: FormData) => Promise<any>;
  deleteTalk: (talkId: number) => Promise<void>;
  postTalkPrefer: (talkId: number) => Promise<void>;
  deleteTalkPrefer: (talkId: number) => Promise<void>;
  getUserProfile: () => Promise<any>;
  deleteUser: () => Promise<void>;
  getCheckNickname: (nickname: string) => Promise<void>;
  postNickname: (nickname: string) => Promise<void>;
  getUserPosts: () => Promise<UserArticleDataProps>;
};

const useTokenApi = (): ArticleApis => {
  const authclient = useAuthClient();
  return {
    postArticle: async (body: FormData): Promise<any> => {
      const { data } = await authclient.post('/article', body);
      return data;
    },

    patchArticle: async (articleId: number, body: FormData): Promise<any> => {
      const { data } = await authclient.patch(
        `/article/edit/${articleId}`,
        body,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return data;
    },

    deleteArticle: async (articleId: number): Promise<void> => {
      await authclient.delete(`/article/${articleId}`);
    },

    postArticlePrefer: async (articleId: number): Promise<void> => {
      await authclient.post(`/article/prefer/${articleId}`);
    },

    deleteArticlePrefer: async (articleId: number): Promise<void> => {
      await authclient.delete(`/article/prefer/${articleId}`);
    },

    postArticleComment: async (id: number, comment: string): Promise<void> => {
      await authclient.post(`/article/comment/${id}`, { comment });
    },

    patchArticleComment: async (id: number, comment: string): Promise<void> => {
      await authclient.patch(`/article/comment/${id}`, { comment });
    },
    postTalk: async (body: FormData): Promise<any> => {
      const { data } = await authclient.post('/talk', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    patchTalk: async (id: number, body: FormData): Promise<any> => {
      const { data } = await authclient.patch(`/talk/edit/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    deleteTalk: async (talkId: number): Promise<void> => {
      await authclient.delete(`/talk/${talkId}`);
    },

    postTalkPrefer: async (talkId: number): Promise<void> => {
      await authclient.post(`/talk/prefer/${talkId}`);
    },

    deleteTalkPrefer: async (talkId: number): Promise<void> => {
      await authclient.delete(`/talk/prefer/${talkId}`);
    },
    getUserProfile: async (): Promise<any> => {
      // const { data } = await authclient.get('/users');
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_DATA;
    },
    deleteUser: async (): Promise<void> => {
      await authclient.delete('/users');
    },
    getCheckNickname: async (nickname: string): Promise<void> => {
      await authclient.get(`/users/check?nickname=${nickname}`);
    },
    postNickname: async (nickname: string): Promise<void> => {
      await authclient.post(`/users/nickname`, { nickname });
    },
    getUserPosts: async (): Promise<UserArticleDataProps> => {
      // const { data } = await authclient.get(`/article/${sortType}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_ARTICLES_DATA;
    },
  };
};

export default useTokenApi;
