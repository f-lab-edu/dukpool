import closeIcon from '@assets/icons/close-noneborder.svg';
import styled from 'styled-components';

type tagProps = {
  tagName: string;
  buttonHandler: () => void;
};

const Tag = ({ tagName, buttonHandler }: tagProps) => {
  return (
    <StyledTagWrapper>
      <StyledTagName>{tagName}</StyledTagName>
      <StyledButton type="button" onClick={buttonHandler}>
        <StyledImg src={closeIcon} alt="삭제" />
      </StyledButton>
    </StyledTagWrapper>
  );
};

Tag.displayName = 'Tag';

const StyledTagWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: var(--gray-5);
  border: none;
  border-radius: 8px;
  line-height: 1px;
`;

const StyledTagName = styled.div`
  font-size: 12px;
  height: auto;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const StyledImg = styled.img`
  width: 16px;
`;

export default Tag;
