import { Suspense, useContext, useState } from 'react';
import { AuthContext } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { media } from '@styles/media';
import styled from 'styled-components';
import Layout from '@components/common/Layout';
import TalkPosts from '@components/talk/TalkPosts';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';
import Dropdown from '@components/common/Dropdown';

const Talk = () => {
  const [sortType, setSortType] = useState<string>('newest');
  const { isLoggined } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePostButton = () => {
    if (!isLoggined) navigate('/login');
    else navigate('/article/write');
  };

  return (
    <Layout>
      <StyledSection>
        <StyledSectionTitle>🎙️ 덕질 토크</StyledSectionTitle>
        <StyledContainer>
          <Dropdown sortType={sortType} setSortType={setSortType} />
          <StyledButton onClick={handlePostButton}>덕질 토크하기</StyledButton>
        </StyledContainer>
        <StyledUl>
          <Suspense
            fallback={Array.from({ length: 20 }, (_, idx) => (
              <li key={idx}>
                <TalkCardSkeleton />
              </li>
            ))}
          >
            <TalkPosts sortType={sortType} />
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
  padding: 0 12px;
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
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
`;

const StyledSectionTitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
`;

export default Talk;
