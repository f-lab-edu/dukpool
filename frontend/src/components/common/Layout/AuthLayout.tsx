import { memo } from 'react';
import styled from 'styled-components';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = memo(({ children }: AuthLayoutProps) => {
  // 로그인 유무 처리
  // 비로그인 시 로그인 페이지로 이동
  return <StyledAuthLayout>{children}</StyledAuthLayout>;
});

AuthLayout.displayName = 'AuthLayout';

const StyledAuthLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1240px;
  min-height: 100vh;
  padding-top: 80px;
`;

export default AuthLayout;
