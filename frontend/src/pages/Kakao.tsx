import { loginAtom } from '@atoms/authAtom';
import Layout from '@components/common/Layout';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Kakao = () => {
  const login = useSetAtom(loginAtom);
  const navigate = useNavigate();
  useEffect(() => {
    login();
    navigate('/', { replace: true });
  }, []);
  return (
    <Layout>
      <div>loading...</div>
    </Layout>
  );
};

export default Kakao;
