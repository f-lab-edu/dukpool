import { useMockFetchData } from '@hooks/useGetQueries';
import styled from 'styled-components';

const Home = () => {
  const { data } = useMockFetchData(1);
  return (
    <StyledWrapper>
      <div>{data}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: 80px 30px;
`;

export default Home;
