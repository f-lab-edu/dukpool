import styled from 'styled-components';

const MyPage = () => {
  return <StyledWrapper>mypage</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: inherit;
  padding: 80px 30px;
`;

export default MyPage;
