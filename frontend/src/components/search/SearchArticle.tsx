import ArticleCard from '@components/article/ArticleCard';
import { media } from '@styles/media';
import { memo } from 'react';
import { ContentResponse } from 'src/@types/content';
import styled from 'styled-components';

type SearchArticleProps = {
  articles: Omit<ContentResponse, 'comment'>[];
  isTagged?: boolean;
};

const SearchArticle = memo(
  ({ articles, isTagged = false }: SearchArticleProps) => {
    return (
      <StyledContainer>
        <StyledSectionTitle>덕질 자랑</StyledSectionTitle>
        {articles.length ? (
          <StyledUl>
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article}></ArticleCard>
            ))}
          </StyledUl>
        ) : (
          <StyledNoneResultBox>
            {isTagged
              ? '해당 태그가 포함된 덕질 자랑이 없어요🥲'
              : '검색어에 해당하는 덕질 자랑이 없어요🥲'}
          </StyledNoneResultBox>
        )}
      </StyledContainer>
    );
  },
);

SearchArticle.displayName = 'SearchArticle';

const StyledContainer = styled.div`
  margin: 30px 0;
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  `}
  ${media.phone`
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  `}
`;

const StyledNoneResultBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--gray-1);
`;

export default SearchArticle;
