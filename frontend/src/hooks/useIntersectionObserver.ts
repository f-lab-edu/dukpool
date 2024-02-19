import { useEffect, useRef } from 'react';

type IntersectionObserverProps = {
  root?: null;
  rootMargin?: string;
  threshold?: number[];
  onIntersect: IntersectionObserverCallback;
};

const useIntersectionObserver = ({
  onIntersect,
  root,
  rootMargin = '0px',
  threshold = [0.5],
}: IntersectionObserverProps) => {
  const target = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold,
      });
      observer.observe(target.current as HTMLDivElement);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  return { target };
};

export default useIntersectionObserver;
