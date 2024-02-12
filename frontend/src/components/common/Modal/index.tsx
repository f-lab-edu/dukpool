import { memo, useContext } from 'react';
import styled from 'styled-components';
import closeIcon from '@assets/icons/close-noneborder.svg';
import logo from '@assets/logo/dukpool-logo.svg';
import alert from '@assets/icons/alert.svg';
import KakaoLoginButton from '@components/common/Button/KakaoLoginButton';
import Button from '@components/common/Button';
import { ModalContext } from '@context/ModalContext';

const MESSAGE_TYPE = {
  comment: '작성하신 댓글을 삭제하시겠어요?',
  post: '작성하신 게시물을 삭제하시겠어요?',
  resign: '정말 덕풀 계정을 삭제하시겠어요?',
  login: '로그인후에 이용해보세요!',
};

const Modal = memo(
  ({ type }: { type: 'comment' | 'post' | 'resign' | 'login' }) => {
    const { hideModal, confirmModal } = useContext(ModalContext);
    return (
      <StyledWrapper
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          e.stopPropagation();
          hideModal(type);
        }}
      >
        <StyledContainer>
          <StyledCloseBtnContainer>
            <StyledCloseIcon src={closeIcon} onClick={() => hideModal(type)} />
          </StyledCloseBtnContainer>
          <StyledFlexContainer>
            <StyledLogoContainer>
              <StyledLogo $type={type} src={type === 'login' ? logo : alert} />
            </StyledLogoContainer>
            <StyledSpan>{MESSAGE_TYPE[type]}</StyledSpan>
            {type === 'login' ? (
              <KakaoLoginButton />
            ) : (
              <StyledButtonContainer>
                <Button
                  text="취소"
                  disabled={false}
                  onClick={() => hideModal(type)}
                  $colorType="light"
                />
                <Button
                  text="삭제"
                  disabled={false}
                  onClick={() => confirmModal(type)}
                  $colorType="dark"
                />
              </StyledButtonContainer>
            )}
          </StyledFlexContainer>
        </StyledContainer>
      </StyledWrapper>
    );
  },
);

Modal.displayName = 'Modal';

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
`;

const StyledLogo = styled.img<{ $type: string }>`
  width: ${({ $type }) => ($type === 'login' ? '210px' : '60px')};
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export default Modal;
