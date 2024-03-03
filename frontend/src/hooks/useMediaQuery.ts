import { useEffect, useState } from 'react';

const NON_DESKTOP_QUERY: string = '(max-width: 840px)';

const useMediaQuery = (): { isMobile: boolean } => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(
    getMatches(NON_DESKTOP_QUERY),
  );

  function handleChange() {
    setMatches(getMatches(NON_DESKTOP_QUERY));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(NON_DESKTOP_QUERY);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, []);

  return { isMobile: matches };
};

export default useMediaQuery;
