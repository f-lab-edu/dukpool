import useClient from '@hooks/useClient';

type AuthApis = {
  getUserProfile: () => Promise<any>;
  getUserToken: (code: string) => Promise<string>;
  postLogout: () => Promise<void>;
  deleteUser: () => Promise<void>;
  getCheckNickname: (nickname: string) => Promise<void>;
};

const useAuthApi = (): AuthApis => {
  const client = useClient();
  return {
    getUserProfile: async (): Promise<any> => {
      const { data } = await client.get('/users');
      return data;
    },
    getUserToken: async (code: string): Promise<string> => {
      const { data } = await client.get(`/login/kakao?code=${code}`);
      return data;
    },
    postLogout: async (): Promise<void> => {
      await client.post('/users/logout');
    },
    deleteUser: async (): Promise<void> => {
      await client.delete('/users');
    },
    getCheckNickname: async (nickname: string): Promise<void> => {
      await client.get(`/members/check-nickname?nickname=${nickname}`);
    },
  };
};

export default useAuthApi;
