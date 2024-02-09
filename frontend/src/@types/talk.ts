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
