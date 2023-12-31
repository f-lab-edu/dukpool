import { useRef, useState } from 'react';

type toastState = {
  message: string;
  isToast: boolean;
  showToast: (message: string) => void;
};

const useToast = (): toastState => {
  const [message, setMessage] = useState<string>('');
  const [isToast, setIsToast] = useState<boolean>(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (message: string) => {
    setIsToast(true);
    setMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsToast(false);
      setMessage('');
    }, 1500);
    toastTimer.current = timer;
  };

  return { message, isToast, showToast };
};

export default useToast;
