import useClient from '@hooks/useClient';

type AuthApis = {
  getIsUserValid: () => Promise<boolean>;
  postLogout: () => Promise<void>;
  deleteUser: () => Promise<void>;
  getCheckNickname: (nickname: string) => Promise<void>;
};

const authApi = (): AuthApis => {
  const client = useClient();
  return {
    getIsUserValid: async (): Promise<boolean> => {
      const { data } = await client.get('/users');
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

export default authApi;
