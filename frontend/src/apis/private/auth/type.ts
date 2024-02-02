export type ArticleResponse = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  images: string[];
  tags: string[];
  content: string;
  date: string;
  id: number;
  likeCount: string;
  comments: {
    users: {
      id: number;
      name: string;
      image: string | null;
      date: string;
      content: string;
    }[];
  };
};

export type TalkResponse = {
  title: string;
  userProfile: {
    name: string;
    image: string | null;
  };
  images: string[];
  tags: string[];
  content: string;
  date: string;
  id: number;
  likeCount: string;
  comments: {
    users: {
      id: number;
      name: string;
      image: string | null;
      date: string;
      content: string;
    }[];
  };
};

export type UserPostResponse = {
  articles: ArticleResponse[];
  talks: TalkResponse[];
};

export type UserInfoResponse = {
  userName: string;
  image: any;
};

export type AuthApis = {
  getUserProfile: () => Promise<UserInfoResponse>;
  deleteUser: () => Promise<void>;
  patchNickname: (nickname: string) => Promise<void>;
  getUserPosts: () => Promise<UserPostResponse>;
};
