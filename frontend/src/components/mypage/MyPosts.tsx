import { memo } from 'react';
import { useGetUserPosts } from '@hooks/useGetQueries';
import { media } from '@styles/media';
import styled from 'styled-components';
import ArticleCard from '@components/article/ArticleCard';
import TalkCard from '@components/talk/TalkCard';

const MyPosts = memo(() => {
  const { data: posts } = useGetUserPosts();
  return (
    <StyledSection>
      <StyledSectionTitle>나의 덕질 활동</StyledSectionTitle>
      <StyledContainer>
        <StyledArticleUl>
          {posts.articles.map((article) => (
            <ArticleCard key={article.id} {...article}></ArticleCard>
          ))}
        </StyledArticleUl>
        <StyledTalkUl>
          {posts.talks.map((talk) => (
            <TalkCard key={talk.id} {...talk}></TalkCard>
          ))}
        </StyledTalkUl>
      </StyledContainer>
    </StyledSection>
  );
});

MyPosts.displayName = 'MyPosts';

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledArticleUl = styled.ul`
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

const StyledTalkUl = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
`;

export default MyPosts;
