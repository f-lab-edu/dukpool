import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@utils/token';

const useAuthCheck = (): {
  isLogined: boolean;
} => {
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const navigate = useNavigate();
  const goToLoginPage = () => navigate('/login');

  useEffect(() => {
    const token = getToken();
    if (!token) goToLoginPage();
    else setIsLogined(true);
  }, []);

  return { isLogined };
};

export default useAuthCheck;
