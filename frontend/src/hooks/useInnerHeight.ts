import { useCallback, useEffect, useState } from 'react';

const useInnerHeight = (): { height: number } => {
  const [height, setHeight] = useState<number>(window.innerHeight);

  const setScreenHeight = useCallback(() => {
    const vh = window.innerHeight * 0.1;
    setHeight(vh);
  }, []);

  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, [setScreenHeight]);

  return { height };
};

export default useInnerHeight;
