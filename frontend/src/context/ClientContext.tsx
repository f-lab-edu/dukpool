import { useContext } from 'react';
import {
  ServerError,
  ExpiredRefreshTokenError,
  ExpiredAccessTokenError,
} from '@utils/errors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ToastContext } from '@context/ToastContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ClientProvider = ({ children }: Props): JSX.Element => {
  const { showToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        throwOnError: true,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (err) => {
          if (err instanceof ExpiredRefreshTokenError) {
            showToast('토큰이 만료되었습니다. 다시 로그인해주세요');
            navigate('/login');
          }
          if (err instanceof ExpiredAccessTokenError) {
            showToast('토큰이 만료되었습니다. 다시 로그인해주세요');
            navigate('/login');
          }
          if (err instanceof ServerError) {
            showToast(
              '네트워크 요청에 실패했습니다. 잠시후 다시 시도해주세요.',
            );
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientProvider;
