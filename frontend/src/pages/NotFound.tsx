import styled from 'styled-components';
import Button from '@components/common/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '@assets/logo/dukpool-logo.svg';
import useInnerHeight from '@hooks/useInnerHeight';
import Layout from '@components/common/Layout';

const NotFound = () => {
  const { height } = useInnerHeight();
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };
  return (
    <Layout>
      <StyledWrapper $height={height}>
        <StyledInfo>
          <StyledLogo src={Logo} alt="Dukpool Logo" />
          <StyledParagraph>요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
        </StyledInfo>
        <Button
          text="메인 페이지로 돌아가기"
          disabled={false}
          onClick={goToMainPage}
        />
      </StyledWrapper>
    </Layout>
  );
};

const StyledWrapper = styled.div<{ $height: number }>`
  width: 100%;
  height: ${({ $height }) => `${$height}vh`};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 80px 30px;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

const StyledLogo = styled.img`
  width: 200px;
`;

export default NotFound;
