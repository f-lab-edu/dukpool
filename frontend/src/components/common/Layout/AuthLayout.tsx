import { memo } from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = memo(({ children }: AuthLayoutProps) => {
  // 로그인 유무 처리
  // 비로그인 시 로그인 페이지로 이동
  return <>{children}</>;
});

AuthLayout.displayName = 'AuthLayout';

export default AuthLayout;
