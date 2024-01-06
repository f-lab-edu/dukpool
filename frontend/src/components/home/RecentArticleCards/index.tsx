import { useGetAllArticles } from '@hooks/useGetQueries';
import { memo } from 'react';
import styled from 'styled-components';
import { ArticleProps } from '@utils/mockData';
import ArticleCard from '@components/ArticleCard';
import Slider from 'react-slick';
import { SliderOption } from '@constants/sliderOption';

const RecentArticleCards = memo(() => {
  const { data: articles } = useGetAllArticles();

  return (
    <StyledSlider {...SliderOption}>
      {articles?.map(
        ({
          title,
          userProfile,
          image,
          date,
          id,
          likeCount,
          commentCount,
          content,
        }: ArticleProps) => (
          <ArticleCard
            title={title}
            userProfile={userProfile}
            image={image}
            date={date}
            id={id}
            likeCount={likeCount}
            commentCount={commentCount}
            content={content}
            key={id}
          ></ArticleCard>
        ),
      )}
    </StyledSlider>
  );
});

RecentArticleCards.displayName = 'RecentArticleCards';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export default RecentArticleCards;
