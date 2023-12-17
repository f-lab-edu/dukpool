import { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '@utils/localStorage';

type AuthProps = {
  isLoggined: boolean;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TOKEN_KEY = 'token';
const AuthContext = createContext<AuthProps>({ isLoggined: false });

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isLoggined, setIsLoggined] = useState<boolean>(false);
  useEffect(() => {
    const token = getLocalStorage(TOKEN_KEY);
    if (token) setIsLoggined(true);
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggined }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
