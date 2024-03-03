import Layout from '@components/common/Layout';
import SearchBar from '@components/common/SearchBar';
import DukpoolArticles from '@components/home/DukpoolArticles';
import DukpoolTalks from '@components/home/DukpoolTalks';
import { media } from '@styles/media';
import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <StyledSection>
        <SearchBar />
      </StyledSection>
      <DukpoolArticles />
      <DukpoolTalks />
    </Layout>
  );
};

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  margin-bottom: 0;
  ${media.phone`
    padding: 0 20px;
  `}
`;

export default Home;
