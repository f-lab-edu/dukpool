import {
  AuthApis,
  UserPostResponse,
  UserInfoResponse,
} from '@apis/private/auth/type';
import { MOCK_USER_ARTICLES_DATA, MOCK_USER_DATA } from '@utils/mockData';
import { AxiosInstance } from 'axios';

const privateAuthApis = (client: AxiosInstance): AuthApis => {
  return {
    getUserProfile: async (): Promise<UserInfoResponse> => {
      // const { data } = await client.get('/users');
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_DATA;
    },
    getUserPosts: async (): Promise<UserPostResponse> => {
      // const { data } = await client.get('/user-posts');
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_USER_ARTICLES_DATA;
    },
    patchNickname: async (nickname: string): Promise<void> => {
      await client.patch(`/users/nickname`, { nickname });
    },
    deleteUser: async (): Promise<void> => {
      await client.delete('/users');
    },
  };
};

export default privateAuthApis;
