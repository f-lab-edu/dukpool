import useClient from '@hooks/useClient';
import {
  MOCK_USER_ARTICLES_DATA,
  MOCK_USER_DATA,
  UserArticleDataProps,
} from '@utils/mockData';

type AuthApis = {
  getUserProfile: () => Promise<any>;
  deleteUser: () => Promise<void>;
  getCheckNickname: (nickname: string) => Promise<void>;
  postNickname: (nickname: string) => Promise<void>;
  getUserPosts: () => Promise<UserArticleDataProps>;
};

const useAuthApi = (): AuthApis => {
  const client = useClient();
  return {
    getUserProfile: async (): Promise<any> => {
      // const { data } = await client.get('/users');
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_DATA;
    },
    deleteUser: async (): Promise<void> => {
      await client.delete('/users');
    },
    getCheckNickname: async (nickname: string): Promise<void> => {
      await client.get(`/users/check?nickname=${nickname}`);
    },
    postNickname: async (nickname: string): Promise<void> => {
      await client.post(`/users/nickname`, { nickname });
    },
    getUserPosts: async (): Promise<UserArticleDataProps> => {
      // const { data } = await client.get(`/article/${sortType}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_ARTICLES_DATA;
    },
  };
};

export default useAuthApi;
