import Layout from '@components/common/Layout';
import useToken from '@hooks/useToken';

const MyPage = () => {
  useToken();
  return <Layout>mypage</Layout>;
};

export default MyPage;
