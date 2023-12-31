import { useRef, useState } from 'react';

type toastState = {
  message: string | null;
  showToast: (message: string) => void;
};

const useToast = (): toastState => {
  const [message, setMessage] = useState<string | null>(null);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = (message: string) => {
    setMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setMessage(null);
    }, 1500);
    toastTimer.current = timer;
  };

  return { message, showToast };
};

export default useToast;
