import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

const useIsLoggined = () => {
  const { isLoggined } = useContext(AuthContext);
  if (!isLoggined) {
    throw new Error('UnAuthorized Error');
  }
};

export default useIsLoggined;
