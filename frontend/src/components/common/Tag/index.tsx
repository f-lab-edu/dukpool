import closeIcon from '@assets/icons/close-noneborder.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type tagProps = {
  tagName: string;
  buttonHandler?: () => void;
};

const Tag = ({ tagName, buttonHandler }: tagProps) => {
  return (
    <StyledTagWrapper>
      {buttonHandler ? (
        <>
          <StyledTagName>#{tagName}</StyledTagName>
          <StyledButton type="button" onClick={buttonHandler}>
            <StyledImg src={closeIcon} alt="close" />
          </StyledButton>
        </>
      ) : (
        <StyledTagLink to={`/tagged/${tagName}`}>#{tagName}</StyledTagLink>
      )}
    </StyledTagWrapper>
  );
};

Tag.displayName = 'Tag';

const StyledTagWrapper = styled.li`
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

const StyledTagLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 100%;
`;

const StyledTagName = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 100%;
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
