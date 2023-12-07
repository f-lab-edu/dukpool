import { Outlet } from 'react-router-dom';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Layout from '@components/common/Layout';
import useMediaQuery from '@hooks/useMediaQuery';
import MobileNavbar from '@components/common/Navbar/MobileNavbar';
const RootPage = () => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Header />
      <Layout>
        <Outlet />
      </Layout>
      {isMobile ? <MobileNavbar /> : <Footer />}
    </>
  );
};

export default RootPage;
