import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import useMediaQuery from '@hooks/useMediaQuery';
import MobileNavbar from '@components/common/Navbar/MobileNavbar';
import ErrorFallback from '@components/common/ErrorFallback';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { AuthProvider } from '@context/AuthContext';
import { ToastProvider } from '@context/ToastContext';
import { Provider } from 'jotai';
import ClientProvider from '@context/ClientContext';

const RootPage = () => {
  const { isMobile } = useMediaQuery();
  const { reset } = useQueryErrorResetBoundary();
  return (
    <Provider>
      <ToastProvider>
        <ClientProvider>
          <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
            <AuthProvider>
              <Header />
              <Outlet />
              {isMobile ? <MobileNavbar /> : <Footer />}
            </AuthProvider>
          </ErrorBoundary>
        </ClientProvider>
      </ToastProvider>
    </Provider>
  );
};

export default RootPage;
