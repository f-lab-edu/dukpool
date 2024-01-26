import { media } from '@styles/media';
import { memo } from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';
import TextArea from '@components/common/TextArea';
import { usePostArticleComment } from '@hooks/usePostMutations';
import Button from '@components/common/Button';
import { FormProvider, useForm } from 'react-hook-form';

type CommentProps = {
  users: {
    id: number;
    name: string;
    image: string | null;
    date: string;
    content: string;
  }[];
};

type FormValue = {
  comment: string;
};

const PostComment = memo(
  ({ id, comments }: { id: number; comments: CommentProps }) => {
    const methods = useForm<FormValue>({
      defaultValues: {
        comment: '',
      },
      mode: 'onTouched',
    });
    const { mutate: postComment } = usePostArticleComment();
    const onSubmit = ({ comment }: FormValue) => {
      postComment({ id, comment });
    };
    return (
      <FormProvider {...methods}>
        <StyledWrapper>
          <StyledCommentContainer>
            <StyledCommentCount>
              댓글 {comments.users.length}개
            </StyledCommentCount>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <TextArea
                placeholder="댓글을 입력해주세요"
                registerType="comment"
                required={true}
                minLength={5}
                isComment={true}
              />
              <StyledButtonContainer>
                <StyledButtonWrapper>
                  <Button
                    type="submit"
                    text="댓글등록"
                    disabled={false}
                    $colorType="dark"
                  />
                </StyledButtonWrapper>
              </StyledButtonContainer>
            </form>
            <StyledUl>
              {comments.users.map((user) => (
                <CommentListItem key={user.id} {...user} />
              ))}
            </StyledUl>
          </StyledCommentContainer>
        </StyledWrapper>
      </FormProvider>
    );
  },
);

PostComment.displayName = 'PostComment';

const StyledWrapper = styled.section`
  margin: 0 100px 30px 100px;
  ${media.tablet`
    margin: 0 30px 20px 30px;
  `}
  ${media.phone`
    margin: 0 15px;
  `}
`;

const StyledCommentContainer = styled.div`
  max-width: 730px; /* 최대 너비 설정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
`;

const StyledCommentCount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

const StyledUl = styled.ul`
  margin-top: 8px;
`;

export default PostComment;
