import Layout from '@components/common/Layout';
import useInnerHeight from '@hooks/useInnerHeight';
import Logo from '@assets/logo/dukpool-logo.svg';
import { loginAtom } from '@atoms/authAtom';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Kakao = () => {
  const login = useSetAtom(loginAtom);
  const navigate = useNavigate();
  const { height } = useInnerHeight();

  useEffect(() => {
    login();
    navigate('/', { replace: true });
  }, []);

  return (
    <Layout>
      <StyledContainer $height={height}>
        <StyledLogo src={Logo} alt="DukpoolLogo" />
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

const fadeAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const StyledLogo = styled.img`
  animation: ${fadeAnimation} 3s ease-in-out infinite;
`;

export default Kakao;
