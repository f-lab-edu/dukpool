import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';
import { UnAuthorizedError } from '@utils/errors';

const useToken = () => {
  const { isLoggined, token } = useContext(AuthContext);
  if (!isLoggined) {
    throw new UnAuthorizedError('UnAuthorized');
  }
  return token;
};

export default useToken;
