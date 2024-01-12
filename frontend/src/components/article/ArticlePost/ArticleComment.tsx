import { media } from '@styles/media';
import { memo } from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';
import TextArea from '@components/common/TextArea';
import { usePostArticleComment } from '@hooks/usePostMutations';

type CommentProps = {
  users: {
    id: number;
    name: string;
    image: string | null;
    date: string;
    content: string;
  }[];
};

const ArticleComment = memo(
  ({ id, comments }: { id: number; comments: CommentProps }) => {
    const { mutate: postComment } = usePostArticleComment();
    return (
      <StyledWrapper>
        <StyledCommentContainer>
          <StyledCommentCount>
            댓글 {comments.users.length}개
          </StyledCommentCount>
          <TextArea buttonText="등록" id={id} buttonHandler={postComment} />
          <StyledUl>
            {comments.users.map((user) => (
              <CommentListItem commentId={id} key={user.id} user={user} />
            ))}
          </StyledUl>
        </StyledCommentContainer>
      </StyledWrapper>
    );
  },
);

ArticleComment.displayName = 'ArticleComment';

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

const StyledUl = styled.ul`
  margin-top: 8px;
`;

export default ArticleComment;
