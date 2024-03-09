import { memo, useContext, useState } from 'react';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import { FormProvider, useForm } from 'react-hook-form';
import { ModalContext } from '@context/ModalContext';
import { CommentProps } from 'src/@types/comment';
import CommentInput from '@components/common/PostDetail/CommentInput';
import CommentModal from '@components/common/Modal/CommentModal';
import { usePatchTalkComment } from '@hooks/usePatchMutations';
import { useDeleteTalkComment } from '@hooks/useDeleteMutations';

type FormValue = {
  desc: string;
};

type CommentListItemProps = {
  contentId: string;
  userUniqId: string | null;
};

const TalkCommentItem = memo(
  ({
    id,
    createdAt,
    desc,
    writer,
    contentId,
    userUniqId,
  }: CommentProps & CommentListItemProps) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const methods = useForm<FormValue>({
      defaultValues: {
        desc,
      },
      mode: 'onTouched',
    });
    const { openModal } = useContext(ModalContext);
    const { mutate: patchComment } = usePatchTalkComment();
    const { mutate: deleteComment } = useDeleteTalkComment();
    const onSubmit = ({ desc }: FormValue) => {
      patchComment({ id, desc, content: contentId });
      setIsEdit(false);
    };
    const handleDelete = async () => {
      const isDeleted = await openModal(<CommentModal />).catch(() => false);
      if (isDeleted) deleteComment({ id, contentId });
    };
    return (
      <FormProvider {...methods}>
        <StyledUserCommentList>
          <StyledCommentUserProfile>
            <StyledCommentUserProfileContainer>
              <StyledCommentProfileImgContainer>
                <StyledCommentProfileImg
                  alt={writer.nickname}
                  src={writer.profileImg ?? placeholderImage}
                />
              </StyledCommentProfileImgContainer>
              <StyledCommentProfileName>
                {writer.nickname}
              </StyledCommentProfileName>
            </StyledCommentUserProfileContainer>
            <StyledWrapper>
              <StyledCommentDate>{createdAt.slice(0, 10)}</StyledCommentDate>
              {userUniqId === writer.id && (
                <StyledEditContainer>
                  <StyledEditButton onClick={() => setIsEdit((prev) => !prev)}>
                    {isEdit ? '수정취소' : '수정'}
                  </StyledEditButton>
                  <StyledEditButton onClick={handleDelete}>
                    삭제
                  </StyledEditButton>
                </StyledEditContainer>
              )}
            </StyledWrapper>
          </StyledCommentUserProfile>
          {!isEdit && <StyledCommentContent>{desc}</StyledCommentContent>}
          {isEdit && (
            <CommentInput
              userUniqId={userUniqId}
              handleSubmit={methods.handleSubmit(onSubmit)}
              buttonText="댓글 수정"
            />
          )}
        </StyledUserCommentList>
      </FormProvider>
    );
  },
);

TalkCommentItem.displayName = 'TalkCommentItem';

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

export default TalkCommentItem;
