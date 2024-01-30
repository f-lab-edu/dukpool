import { memo } from 'react';
import { Link } from 'react-router-dom';
import { CONFIG } from '@config';
import styled from 'styled-components';
import KakaoLogo from '@assets/icons/kakao.svg';

const KakaoLoginButton = memo(() => {
  return (
    <StyledLink
      to={`https://kauth.kakao.com/oauth/authorize?client_id=${CONFIG.API_KEYS.LOGIN}&redirect_uri=${CONFIG.LOCAL}/api/auth/kakao/callback&response_type=code`}
    >
      <StyledKakaoLogo src={KakaoLogo} />
      <StyledInfoText>카카오 로그인</StyledInfoText>
    </StyledLink>
  );
});

KakaoLoginButton.displayName = 'KakaoLoginButton';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  background-color: #fee500;
  border-radius: 12px;
  height: 45px;
`;

const StyledKakaoLogo = styled.img`
  margin-right: 8px;
`;

const StyledInfoText = styled.p`
  font-size: 14px;
`;

export default KakaoLoginButton;
