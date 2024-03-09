import { memo } from 'react';
import styled from 'styled-components';

const HighlightText = memo(
  ({
    searchText,
    searchResult,
  }: {
    searchText: string;
    searchResult: string;
  }) => {
    const matchText = searchResult.split(new RegExp(`(${searchText})`, 'gi'));
    console.log(matchText);
    return (
      <div>
        {matchText.map((part, idx) => (
          <StyledSpan key={idx} $highlight={idx === 1}>
            {part}
          </StyledSpan>
        ))}
      </div>
    );
  },
);

HighlightText.displayName = 'HighlightText';

const StyledSpan = styled.span<{ $highlight: boolean }>`
  color: ${({ $highlight }) =>
    $highlight ? 'var(--primary)' : 'var(--black)'};
`;

export default HighlightText;
