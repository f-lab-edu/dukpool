import { memo } from 'react';
import useAuthCheck from '@hooks/useAuthCheck';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = memo(({ children }: AuthLayoutProps) => {
  const { isLogined } = useAuthCheck();
  return isLogined ? <>{children}</> : null;
});

AuthLayout.displayName = 'AuthLayout';

export default AuthLayout;
