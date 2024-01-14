import { memo, useState } from 'react';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import TextArea from '@components/common/TextArea';
import { usePatchArticleComment } from '@hooks/usePatchMutations';

type CommentItemProps = {
  id: number;
  name: string;
  image: string | null;
  date: string;
  content: string;
};

const CommentListItem = memo(
  ({ id, name, image, date, content }: CommentItemProps) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { mutate: patchComment } = usePatchArticleComment();
    return (
      <StyledUserCommentList>
        <StyledCommentUserProfile>
          <StyledCommentUserProfileContainer>
            <StyledCommentProfileImgContainer>
              <StyledCommentProfileImg src={image ?? placeholderImage} />
            </StyledCommentProfileImgContainer>
            <StyledCommentProfileName>{name}</StyledCommentProfileName>
          </StyledCommentUserProfileContainer>
          <StyledWrapper>
            <StyledCommentDate>{date}</StyledCommentDate>
            <StyledEditContainer>
              <StyledEditButton onClick={() => setIsEdit((prev) => !prev)}>
                {isEdit ? '수정취소' : '수정'}
              </StyledEditButton>
              <StyledEditButton>삭제</StyledEditButton>
            </StyledEditContainer>
          </StyledWrapper>
        </StyledCommentUserProfile>
        {!isEdit && <StyledCommentContent>{content}</StyledCommentContent>}
        {isEdit && (
          <TextArea
            previousValue={content}
            buttonText="수정"
            id={id}
            buttonHandler={patchComment}
          />
        )}
      </StyledUserCommentList>
    );
  },
);

CommentListItem.displayName = 'CommentListItem';

const StyledUserCommentList = styled.li`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-4);
`;

const StyledCommentUserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledCommentUserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCommentProfileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 4px;
`;

const StyledCommentProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledCommentProfileName = styled.span`
  font-size: 14px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledEditContainer = styled.div`
  display: flex;
`;

const StyledEditButton = styled.button`
  font-size: 11px;
  background-color: transparent;
  border: none;
  font-weight: 500;
  color: var(--gray-1);
`;

const StyledCommentDate = styled.p`
  font-size: 11px;
  color: var(--gray-1);
  margin-right: 10px;
`;

const StyledCommentContent = styled.div`
  font-size: 14px;
`;

export default CommentListItem;
