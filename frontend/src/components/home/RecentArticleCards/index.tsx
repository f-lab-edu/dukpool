import { memo } from 'react';
import styled from 'styled-components';
import { ArticleProps } from '@utils/mockData';
import ArticleCard from '@components/ArticleCard';
import Slider from 'react-slick';
import { SliderOption } from '@constants/sliderOption';
import useMediaQuery from '@hooks/useMediaQuery';
import { useGetAllArticles } from '@hooks/useGetQueries';
import assert from '@utils/assert';

const RecentArticleCards = memo(() => {
  const { isMobile } = useMediaQuery();
  const { data: articles } = useGetAllArticles();
  assert(articles);

  const articleCards = articles.map((article: ArticleProps) => (
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
