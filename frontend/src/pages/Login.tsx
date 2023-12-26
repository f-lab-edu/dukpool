import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '@assets/logo/dukpool-logo.svg';
import KakaoLogo from '@assets/icons/kakao.svg';
import { CONFIG } from '@config';

const MyPage = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledInfo>
          <StyledLogo src={Logo} alt="Dukpool 로고" />
          <StyledInfoText>나만의 덕질 취향을 공유해보세요.</StyledInfoText>
        </StyledInfo>
        <StyledLink
          to={`https://kauth.kakao.com/oauth/authorize?client_id=${CONFIG.API_KEYS.LOGIN}&redirect_uri=${CONFIG.LOCAL}/auth/kakao&response_type=code`}
        >
          <StyledKakaoLogo src={KakaoLogo} />
          <StyledInfoText>카카오 로그인</StyledInfoText>
        </StyledLink>
      </StyledContainer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInfoText = styled.p`
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  background-color: #fee500;
  border-radius: 12px;
  height: 45px;
`;

const StyledLogo = styled.img`
  width: 200px;
`;

const StyledKakaoLogo = styled.img`
  margin-right: 8px;
`;

export default MyPage;
