import styled from 'styled-components';
import Layout from '@components/common/Layout';
import Button from '@components/common/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '@assets/logo/dukpool-logo.svg';

const NotFound = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };
  return (
    <Layout>
      <StyledWrapper>
        <StyledInfo>
          <StyledLogo src={Logo} alt="Dukpool 로고" />
          <StyledParagraph>요청하신 페이지를 찾을 수 없습니다.</StyledParagraph>
        </StyledInfo>
        <Button
          text="메인 페이지로 돌아가기"
          disabled={false}
          $colorType="dark"
          onClick={goToMainPage}
        />
      </StyledWrapper>
    </Layout>
  );
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
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
