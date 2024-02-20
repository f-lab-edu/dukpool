import styled from 'styled-components';
import TalkCommentItem from '@components/talk/TalkDetail/TalkCommentItem';
import CommentInput from '@components/common/PostDetail/CommentInput';
import { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CommentProps } from 'src/@types/comment';
import { useAtomValue } from 'jotai';
import { userUniqIdAtom } from '@atoms/authAtom';
import { media } from '@styles/media';
import { usePostTalkComment } from '@hooks/usePostMutations';

type FormValue = {
  desc: string;
};

type PostCommentProps = {
  contentId: string;
  comments: CommentProps[];
};

const TalkComment = memo(({ contentId, comments }: PostCommentProps) => {
  const userUniqId = useAtomValue(userUniqIdAtom);
  const { mutate: postComment } = usePostTalkComment();
  const methods = useForm<FormValue>({
    defaultValues: {
      desc: '',
    },
    mode: 'onTouched',
  });
  const onSubmit = ({ desc }: FormValue) => {
    postComment({ desc, content: contentId });
  };
  return (
    <FormProvider {...methods}>
      <StyledWrapper>
        <StyledCommentContainer>
          <StyledCommentCount>댓글 {comments.length}개</StyledCommentCount>
          <CommentInput
            userUniqId={userUniqId}
            handleSubmit={methods.handleSubmit(onSubmit)}
            buttonText="댓글 등록"
          />
          <StyledUl>
            {comments.map((comment) => (
              <TalkCommentItem
                key={comment.id}
                contentId={contentId}
                userUniqId={userUniqId}
                {...comment}
              />
            ))}
          </StyledUl>
        </StyledCommentContainer>
      </StyledWrapper>
    </FormProvider>
  );
});

TalkComment.displayName = 'TalkComment';

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

export default TalkComment;
