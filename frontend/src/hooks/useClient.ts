import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';
import { UnAuthorizedError } from '@utils/errors';

const useClient = () => {
  const { client } = useContext(AuthContext);
  if (!client) {
    throw new UnAuthorizedError('UnAuthorized');
  }
  return client;
};

export default useClient;
