import { memo } from 'react';
import { media } from '@styles/media';
import styled from 'styled-components';
import { ContentResponse } from 'src/@types/content';
import MyArticleCard from '@components/article/ArticleCard/MyArticleCard';
import MyTalkCard from '@components/talk/TalkCard/MyTalkCard';

type UserPostsType = {
  userNickname: string;
  userProfile: string;
  articles: Omit<Omit<ContentResponse, 'comment'>, 'writer'>[];
  talks: Omit<Omit<ContentResponse, 'comment'>, 'writer'>[];
};

const MyPosts = memo(
  ({ userNickname, userProfile, articles, talks }: UserPostsType) => {
    return (
      <StyledSection>
        <StyledSectionTitle>나의 덕질 활동</StyledSectionTitle>
        <StyledContainer>
          <StyledArticleUl>
            {articles.map((article) => (
              <MyArticleCard
                key={article.id}
                nickname={userNickname}
                profileImg={userProfile}
                data={article}
              />
            ))}
          </StyledArticleUl>
          <StyledTalkUl>
            {talks.map((talk) => (
              <MyTalkCard
                key={talk.id}
                nickname={userNickname}
                profileImg={userProfile}
                data={talk}
              />
            ))}
          </StyledTalkUl>
        </StyledContainer>
      </StyledSection>
    );
  },
);

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
  gap: 50px;
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
