import { createContext } from 'react';
import Toast from '@components/common/Toast';
import useToast from '@hooks/useToast';

type ToastProps = {
  showToast: (message: string) => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToastContext = createContext<ToastProps>({
  showToast: () => {},
});

const ToastProvider = ({ children }: Props): JSX.Element => {
  const { showToast, isToast, message } = useToast();
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isToast && <Toast message={message} />}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
