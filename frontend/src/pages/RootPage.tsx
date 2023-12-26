import { Outlet } from 'react-router-dom';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import Layout from '@components/common/Layout';
import useMediaQuery from '@hooks/useMediaQuery';
import MobileNavbar from '@components/common/Navbar/MobileNavbar';
import ErrorFallback from '@components/common/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { AuthProvider } from '@context/AuthContext';

const RootPage = () => {
  const { isMobile } = useMediaQuery();
  return (
    <>
      <Header />
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </ErrorBoundary>
      </Layout>
      {isMobile ? <MobileNavbar /> : <Footer />}
    </>
  );
};

export default RootPage;
