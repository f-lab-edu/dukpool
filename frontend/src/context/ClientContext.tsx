import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useApiError from '@hooks/useApiError';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ClientProvider = ({ children }: Props): JSX.Element => {
  const { defaultMutationHandler } = useApiError();
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            throwOnError: true,
            refetchOnWindowFocus: false,
          },
          mutations: {
            onError: (err) => defaultMutationHandler(err),
          },
        },
      }),
    [],
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ClientProvider;
