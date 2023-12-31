import styled from 'styled-components';
import { usePostArticle } from '@hooks/usePostMutations';

const Home = () => {
  const { mutate: onSubmitArticle } = usePostArticle();
  const formData = new FormData();
  return (
    <StyledWrapper>
      <button onClick={() => onSubmitArticle(formData)}>post</button>
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
