import ArticlePosts from '@components/article/ArticlePosts';
import Layout from '@components/common/Layout';
import { media } from '@styles/media';
import { Suspense, useContext } from 'react';
import styled from 'styled-components';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import { AuthContext } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@components/common/Dropdown';

const Article = () => {
  const { isLoggined } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePostButton = () => {
    if (!isLoggined) navigate('/login');
    else navigate('/article/write');
  };

  return (
    <Layout>
      <StyledSection>
        <StyledSectionTitle>📸 덕질 자랑</StyledSectionTitle>
        <StyledContainer>
          <Dropdown />
          <StyledButton onClick={handlePostButton}>덕질 자랑하기</StyledButton>
        </StyledContainer>
        <StyledUl>
          <Suspense
            fallback={Array.from({ length: 20 }, (_, idx) => (
              <li key={idx}>
                <ArticleCardSkeleton />
              </li>
            ))}
          >
            <ArticlePosts />
          </Suspense>
        </StyledUl>
      </StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 0 30px;
  ${media.phone`
    padding: 0 10px;
  `}
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 10px 8px;
  border: none;
  border-radius: 8px;
  background-color: var(--primary);
  color: var(--white);
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
  align-items: center;
  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  `}
`;

const StyledSectionTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
`;

export default Article;
