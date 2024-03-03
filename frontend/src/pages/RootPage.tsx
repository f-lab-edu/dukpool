import useMediaQuery from '@hooks/useMediaQuery';
import useRouteChangeTracker from '@hooks/useRouteChangeTracker';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import MobileNavbar from '@components/common/Navbar/MobileNavbar';
import ErrorFallback from '@components/common/ErrorFallback';
import ModalContainer from '@components/common/Modal/ModalContainer';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'jotai';
import { ToastProvider } from '@context/ToastContext';
import ClientProvider from '@context/ClientContext';
import { ModalProvider } from '@context/ModalContext';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { CONFIG } from '@config';

const RootPage = () => {
  const { isMobile } = useMediaQuery();
  const { reset } = useQueryErrorResetBoundary();
  useRouteChangeTracker();
  return (
    <Provider>
      <ModalProvider>
        <ToastProvider>
          <ClientProvider>
            <ModalContainer />
            {CONFIG.ENV === 'development' ? <ReactQueryDevtools /> : <></>}
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
              <Header />
              <Outlet />
              {isMobile ? <MobileNavbar /> : <Footer />}
            </ErrorBoundary>
          </ClientProvider>
        </ToastProvider>
      </ModalProvider>
    </Provider>
  );
};

export default RootPage;
