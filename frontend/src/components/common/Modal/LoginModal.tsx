import { memo } from 'react';
import KakaoLoginButton from '@components/common/Button/KakaoLoginButton';
import closeIcon from '@assets/icons/close-noneborder.svg';
import logo from '@assets/logo/dukpool-logo.svg';
import styled from 'styled-components';

const LoginModal = memo(
  ({ onSubmit }: { onSubmit?: (type: boolean) => void }) => {
    return (
      <StyledWrapper
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          e.stopPropagation();
          onSubmit?.(false);
        }}
      >
        <StyledContainer>
          <StyledCloseBtnContainer>
            <StyledCloseIcon
              src={closeIcon}
              onClick={() => onSubmit?.(false)}
            />
          </StyledCloseBtnContainer>
          <StyledFlexContainer>
            <StyledLogoContainer>
              <StyledLogo src={logo} />
            </StyledLogoContainer>
            <StyledSpan>로그인 후에 이용해보세요!</StyledSpan>
            <StyledButtonContainer onClick={() => onSubmit?.(true)}>
              <KakaoLoginButton />
            </StyledButtonContainer>
          </StyledFlexContainer>
        </StyledContainer>
      </StyledWrapper>
    );
  },
);

LoginModal.displayName = 'LoginModal';

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
  width: 210px;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
`;

export default LoginModal;
