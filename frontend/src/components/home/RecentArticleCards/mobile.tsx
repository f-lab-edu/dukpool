import { useGetAllArticles } from '@hooks/useGetQueries';
import { memo } from 'react';
import styled from 'styled-components';
import { ArticleProps } from '@utils/mockData';
import ArticleCard from '@components/ArticleCard';

const MobileRecentArticleCards = memo(() => {
  const { data: articles } = useGetAllArticles();

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
});

MobileRecentArticleCards.displayName = 'MobileRecentArticleCards';

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

export default MobileRecentArticleCards;
