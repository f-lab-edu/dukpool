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

export type SearchResponse = {
  tags: string[];
  articles: ArticleResponse[];
  talks: TalkResponse[];
};

export type TaggedPostResponse = {
  articles: ArticleResponse[];
  talks: TalkResponse[];
};

export type ValidationResponse = {
  isPossible: boolean;
};

export type PublicApis = {
  getAllArticles: (sortType: string) => Promise<ArticleResponse[]>;
  getArticle: (id: number) => Promise<ArticleResponse>;
  getAllTalks: (sortType: string) => Promise<TalkResponse[]>;
  getTalk: (id: number) => Promise<TalkResponse>;
  getSearchPost: (text: string) => Promise<SearchResponse>;
  getTaggedPost: (tagName: string) => Promise<TaggedPostResponse>;
  getCheckNickname: (nickname: string) => Promise<ValidationResponse>;
};
