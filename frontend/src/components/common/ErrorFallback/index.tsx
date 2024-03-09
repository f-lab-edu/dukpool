import { memo, useContext, useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@hooks/useMediaQuery';
import styled from 'styled-components';
import Button from '@components/common/Button';
import Header from '@components/common/Header';
import Layout from '@components/common/Layout';
import MobileNavbar from '@components/common/Navbar/MobileNavbar';
import Footer from '@components/common/Footer';
import Logo from '@assets/logo/dukpool-logo.svg';
import { UnAuthorizedError, ExpiredRefreshTokenError } from '@utils/errors';
import useInnerHeight from '@hooks/useInnerHeight';
import { ToastContext } from '@context/ToastContext';

const ErrorFallback = memo(({ error, resetErrorBoundary }: FallbackProps) => {
  const { height } = useInnerHeight();
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    if (error instanceof UnAuthorizedError) {
      navigate('/login');
      resetErrorBoundary();
    }
    if (error instanceof ExpiredRefreshTokenError) {
      showToast('토큰이 만료되었습니다. 다시 로그인해주세요');
      resetErrorBoundary();
    }
  }, []);

  if (error instanceof UnAuthorizedError) return null;
  if (error instanceof ExpiredRefreshTokenError) return null;

  return (
    <>
      <Header />
      <Layout>
        <StyledWrapper $height={height}>
          <StyledInfo>
            <StyledLogo src={Logo} alt="Dukpool Logo" />
            <StyledParagraph>
              데이터를 불러오는데 오류가 발생했습니다.
            </StyledParagraph>
            <StyledParagraph>재시도 해주세요.</StyledParagraph>
          </StyledInfo>
          <Button
            text="재시도"
            disabled={false}
            onClick={resetErrorBoundary}
          ></Button>
        </StyledWrapper>
      </Layout>
      {isMobile ? <MobileNavbar /> : <Footer />}
    </>
  );
});

ErrorFallback.displayName = 'ErrorFallback';

const StyledWrapper = styled.div<{ $height: number }>`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: ${({ $height }) => `${$height}vh`};
  padding: 80px 30px;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 200px;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

export default ErrorFallback;
