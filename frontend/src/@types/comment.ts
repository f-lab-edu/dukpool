import { UserProps } from './user';

export type CommentProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  desc: string;
  writer: UserProps;
};
