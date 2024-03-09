import styled from 'styled-components';
import Logo from '@assets/logo/dukpool-logo.svg';
import Layout from '@components/common/Layout';
import useInnerHeight from '@hooks/useInnerHeight';
import KakaoLoginButton from '@components/common/Button/KakaoLoginButton';

const Login = () => {
  const { height } = useInnerHeight();
  return (
    <Layout>
      <StyledContainer $height={height}>
        <StyledInfo>
          <StyledLogo src={Logo} alt="Dukpool Logo" />
          <StyledInfoText>나만의 덕질 취향을 공유해보세요.</StyledInfoText>
        </StyledInfo>
        <KakaoLoginButton />
      </StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => `${$height}vh`};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInfoText = styled.p`
  font-size: 14px;
`;

const StyledLogo = styled.img`
  width: 200px;
`;
export default Login;
