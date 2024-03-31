import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';

type LazyImageProps = {
  src: string;
  alt: string;
  isTalkContentImg?: boolean;
};

const LazyImage = ({ src, alt, isTalkContentImg = false }: LazyImageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onIntersect = useCallback(
    async (
      [entry]: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) => {
      if (entry.isIntersecting && !isVisible) {
        observer.unobserve(entry.target);
        setIsVisible(true);
        observer.observe(entry.target);
      }
    },
    [isVisible],
  );

  const { target } = useIntersectionObserver({
    onIntersect,
  });

  return isTalkContentImg ? (
    <StyledTalkImgContainer ref={target}>
      <StyledTalkImage
        alt={alt}
        src={isVisible && src ? src : placeholderImage}
        $isVisible={isVisible}
      />
    </StyledTalkImgContainer>
  ) : (
    <StyledImgContainer ref={target}>
      <StyledImage
        alt={alt}
        src={isVisible && src ? src : placeholderImage}
        $isVisible={isVisible}
      />
    </StyledImgContainer>
  );
};

const StyledImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
`;

const StyledImage = styled.img<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s;
`;

const StyledTalkImgContainer = styled.div`
  width: 30%;
  min-width: 80px;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
`;

const StyledTalkImage = styled.img<{ $isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default LazyImage;
