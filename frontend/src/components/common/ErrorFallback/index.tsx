import { useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/Button';
import styled from 'styled-components';
import Logo from '@assets/logo/dukpool-logo.svg';

const INVALID_TOKEN_ERROR = 'UnAuthorized Error';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate('/login');
  };
  useEffect(() => {
    if (error.message === INVALID_TOKEN_ERROR) {
      goToLoginPage();
      resetErrorBoundary();
    }
  }, []);
  return (
    <StyledWrapper>
      <StyledInfo>
        <StyledLogo src={Logo} alt="Dukpool 로고" />
        <StyledParagraph>오류가 발생했습니다.</StyledParagraph>
        <StyledParagraph>재시도 해주세요.</StyledParagraph>
      </StyledInfo>
      <Button
        text="재시도"
        disabled={false}
        $colorType="dark"
        onClick={resetErrorBoundary}
      ></Button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
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
