import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
  const { searchId } = useParams();
  return <StyledWrapper>{searchId}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: 80px 30px;
`;

export default Search;
