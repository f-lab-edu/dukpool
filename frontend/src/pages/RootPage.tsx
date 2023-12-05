import { Outlet } from 'react-router-dom';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Layout from '@components/common/Layout';
const RootPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
};

export default RootPage;
