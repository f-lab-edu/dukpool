import next from '@assets/icons/right-arrow.svg';
import prev from '@assets/icons/left-arrow.svg';

export const SliderOption = {
  arrows: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <img src={next} />,
  prevArrow: <img src={prev} />,
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
      breakpoint: 780,
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
  slidesToShow: 3,
  slidesToScroll: 3,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <img src={next} />,
  prevArrow: <img src={prev} />,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
