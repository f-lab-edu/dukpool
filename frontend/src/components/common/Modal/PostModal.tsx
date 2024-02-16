import { memo, useContext } from 'react';
import { ModalContext } from '@context/ModalContext';
import Button from '@components/common/Button';
import closeIcon from '@assets/icons/close-noneborder.svg';
import alert from '@assets/icons/alert.svg';
import styled from 'styled-components';

const PostModal = memo(
  ({ resolveFn }: { resolveFn?: (type: boolean) => Promise<boolean> }) => {
    const { hideModal } = useContext(ModalContext);
    const rejectAction = () => {
      resolveFn!(false);
      hideModal();
    };
    const confirmAction = () => {
      resolveFn!(true);
      hideModal();
    };
    return (
      <StyledWrapper
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          e.stopPropagation();
          rejectAction();
        }}
      >
        <StyledContainer>
          <StyledCloseBtnContainer>
            <StyledCloseIcon src={closeIcon} onClick={rejectAction} />
          </StyledCloseBtnContainer>
          <StyledFlexContainer>
            <StyledLogoContainer>
              <StyledLogo src={alert} />
            </StyledLogoContainer>
            <StyledSpan>작성하신 게시물을 삭제하시겠어요?</StyledSpan>
            <StyledButtonContainer>
              <Button
                text="취소"
                disabled={false}
                onClick={rejectAction}
                $colorType="light"
              />
              <Button
                text="삭제"
                disabled={false}
                onClick={confirmAction}
                $colorType="dark"
                error={true}
              />
            </StyledButtonContainer>
          </StyledFlexContainer>
        </StyledContainer>
      </StyledWrapper>
    );
  },
);

PostModal.displayName = 'PostModal';

const StyledWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(11, 19, 30, 0.37);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 99;
`;

const StyledContainer = styled.article`
  width: 360px;
  height: 332px;
  margin: auto;
  padding: 24px;
  background-color: var(--white);
  border-radius: 8px;
`;

const StyledCloseBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledCloseIcon = styled.img`
  width: 24px;
  cursor: pointer;
`;

const StyledFlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledLogoContainer = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;

const StyledLogo = styled.img`
  width: 60px;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export default PostModal;
