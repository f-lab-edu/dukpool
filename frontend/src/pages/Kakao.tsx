import { AuthContext } from '@context/AuthContext';
import { useContext, useEffect } from 'react';

const Kakao = () => {
  const { login } = useContext(AuthContext);
  useEffect(() => {
    login();
  }, []);
  return <></>;
};

export default Kakao;
