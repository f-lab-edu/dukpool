import { memo, useEffect, useState } from 'react';
import { getToken } from '@utils/token';
import { useNavigate } from 'react-router-dom';

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = memo(({ children }: AuthLayoutProps) => {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const navigate = useNavigate();
  const goToLoginPage = () => navigate('/login');

  useEffect(() => {
    const token = getToken();
    if (!token) goToLoginPage();
    else setIsLogined(true);
  }, []);

  return isLogined ? <>{children}</> : null;
});

AuthLayout.displayName = 'AuthLayout';

export default AuthLayout;
