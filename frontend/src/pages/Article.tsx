import styled from 'styled-components';

const Article = () => {
  return <StyledWrapper>article</StyledWrapper>;
};

export default Article;

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: 80px 30px;
`;
