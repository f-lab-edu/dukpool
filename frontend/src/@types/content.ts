import { CommentProps } from './comment';
import { UserProps } from './user';

export type MetaProps = {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type AllContentResponse = Omit<ContentResponse, 'comment'>;

export type ContentResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  isLiked: boolean;
  title: string;
  desc: string;
  img: string[];
  tag: string[];
  commentCount: number;
  likeCount: number;
  writer: UserProps;
  comment: CommentProps[];
};

export type SearchResponse = {
  contents: {
    data: Omit<ContentResponse, 'comment'>[];
  };
  talkContents: {
    data: Omit<ContentResponse, 'comment'>[];
  };
};

export type InfiniteQueryProps = {
  data: AllContentResponse[];
  meta: MetaProps;
};
