import { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

const useIsLoggined = () => {
  const { isLoggined } = useContext(AuthContext);
  if (!isLoggined) {
    throw new Error('The token does not exist or is not valid.');
  }
};

export default useIsLoggined;
