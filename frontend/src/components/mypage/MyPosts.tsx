import { memo } from 'react';
import { media } from '@styles/media';
import styled from 'styled-components';
import { ContentResponse } from 'src/@types/content';
import MyArticleCard from '@components/article/ArticleCard/MyArticleCard';
import MyTalkCard from '@components/talk/TalkCard/MyTalkCard';
import { useNavigate } from 'react-router-dom';

type UserPostsType = {
  userNickname: string;
  userProfile: string;
  articles: Omit<Omit<ContentResponse, 'comment'>, 'writer'>[];
  talks: Omit<Omit<ContentResponse, 'comment'>, 'writer'>[];
};

const MyPosts = memo(
  ({ userNickname, userProfile, articles, talks }: UserPostsType) => {
    const navigate = useNavigate();
    return (
      <StyledSection>
        <StyledSectionTitle>나의 덕질 활동</StyledSectionTitle>
        <StyledContainer>
          {articles.length ? (
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
          ) : (
            <StyledNoneResultBox>
              <span>지금 바로 나의 덕질을 자랑해보세요!</span>
              <StyledButton onClick={() => navigate('/article/new')}>
                덕질 자랑하기
              </StyledButton>
            </StyledNoneResultBox>
          )}
          {talks.length ? (
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
          ) : (
            <StyledNoneResultBox>
              <span>지금 바로 덕질에 대한 이야기를 나눠보세요!</span>
              <StyledButton onClick={() => navigate('/talk/new')}>
                덕질 토크하기
              </StyledButton>
            </StyledNoneResultBox>
          )}
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

const StyledNoneResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--gray-1);
  padding: 20px 0;
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 10px 8px;
  border: none;
  border-radius: 8px;
  background-color: var(--primary);
  color: var(--white);
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
