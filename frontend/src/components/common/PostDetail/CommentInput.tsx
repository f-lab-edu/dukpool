import { memo, useContext } from 'react';
import { ModalContext } from '@context/ModalContext';
import TextArea from '@components/common/TextArea';
import Button from '@components/common/Button';
import LoginModal from '@components/common/Modal/LoginModal';
import styled from 'styled-components';

type CommentInputProps = {
  handleSubmit: () => void;
  userUniqId: string | null;
  buttonText: string;
};

const CommentInput = memo(
  ({ handleSubmit, userUniqId, buttonText }: CommentInputProps) => {
    const { openModal } = useContext(ModalContext);
    return (
      <StyledForm onSubmit={handleSubmit}>
        <TextArea
          placeholder={userUniqId ? '댓글을 입력해주세요' : ''}
          registerType="desc"
          required={true}
          isComment={true}
          disabled={!userUniqId}
        />
        {!userUniqId && (
          <StyledLoginPlaceholderBox>
            <StyledPlaceholder>댓글을 작성하려면 </StyledPlaceholder>
            <StyledHighlightSpan
              onClick={() => openModal(<LoginModal />).catch(() => false)}
            >
              로그인
            </StyledHighlightSpan>
            <StyledPlaceholder>이 필요합니다.</StyledPlaceholder>
          </StyledLoginPlaceholderBox>
        )}
        <StyledButtonContainer>
          <StyledButtonWrapper>
            <Button
              type="submit"
              text={buttonText}
              disabled={userUniqId ? false : true}
            />
          </StyledButtonWrapper>
        </StyledButtonContainer>
      </StyledForm>
    );
  },
);

CommentInput.displayName = 'CommentInput';

const StyledForm = styled.form`
  position: relative;
`;

const StyledLoginPlaceholderBox = styled.div`
  font-size: 14px;
  position: absolute;
  top: 0;
  padding: 14px;
`;

const StyledPlaceholder = styled.span`
  color: var(--gray-1);
`;

const StyledHighlightSpan = styled.span`
  cursor: pointer;
  color: var(--primary);
  font-weight: 700;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

export default CommentInput;
