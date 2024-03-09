/* eslint-disable @typescript-eslint/no-unused-vars */
import next from '@assets/icons/right-arrow.svg';
import prev from '@assets/icons/left-arrow.svg';
import styled from 'styled-components';
import { media } from '@styles/media';

const ArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <StyledLeftArrowImgContainer {...props}>
    <StyledImg alt="arrow" src={prev} />
  </StyledLeftArrowImgContainer>
);

const ArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <StyledRightArrowImgContainer {...props}>
    <StyledImg alt="arrow" src={next} />
  </StyledRightArrowImgContainer>
);

export const SliderOption = {
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export const MultipleRowSliderOption = {
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
  responsive: [
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const ArticleImageSliderOption = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  slidesPerRow: 1,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};

const StyledRightArrowImgContainer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -30px;
  bottom: 50%;
  ${media.tablet`
  display: none !important;
`}
`;

const StyledLeftArrowImgContainer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -30px;
  bottom: 50%;
  ${media.tablet`
  display: none !important;
`}
`;

const StyledImg = styled.img`
  width: 100%;
  position: absolute;
  left: 0px;
`;
