import { UnAuthorizedError } from '@utils/errors';
import { useAtomValue } from 'jotai';
import { loginStatusAtom, authClientAtom } from '@atoms/authAtom';

const useAuthClient = () => {
  const isLoggined = useAtomValue(loginStatusAtom);
  const client = useAtomValue(authClientAtom);
  if (!isLoggined) {
    throw new UnAuthorizedError('UnAuthorized');
  }
  return client;
};

export default useAuthClient;
