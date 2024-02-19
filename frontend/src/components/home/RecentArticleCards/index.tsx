import { memo } from 'react';
import styled from 'styled-components';
import ArticleCard from '@components/article/ArticleCard';
import Slider from 'react-slick';
import { SliderOption } from '@constants/sliderOption';
import useMediaQuery from '@hooks/useMediaQuery';
import { useMainArticles } from '@hooks/useGetQueries';

const RecentArticleCards = memo(() => {
  const { isMobile } = useMediaQuery();
  const { data: articles } = useMainArticles();

  const articleCards = articles.map((article) => (
    <ArticleCard {...article} key={article.id}></ArticleCard>
  ));

  return isMobile ? (
    <StyledWrapper>{articleCards}</StyledWrapper>
  ) : (
    <StyledSlider {...SliderOption}>{articleCards}</StyledSlider>
  );
});

RecentArticleCards.displayName = 'RecentArticleCards';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const StyledWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default RecentArticleCards;
