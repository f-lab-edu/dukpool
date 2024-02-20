import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTagged } from '@hooks/useGetQueries';
import assert from 'assert';
import styled from 'styled-components';
import SearchArticle from '@components/search/SearchArticle';
import SearchTalk from '@components/search/SearchTalk';

const TaggedResult = memo(() => {
  const { tagName } = useParams();
  assert(tagName);
  const { data: taggedData } = useTagged(tagName);
  console.log(taggedData);
  return (
    <>
      <StyledResultText>
        <StyledTagWrapper>#{tagName}</StyledTagWrapper>
        <StyledSpanText>태그가 포함된 게시물 검색 결과에요!</StyledSpanText>
      </StyledResultText>
      <SearchArticle articles={taggedData.contents.data} isTagged={true} />
      <SearchTalk talks={taggedData.talkContents.data} isTagged={true} />
    </>
  );
});

const StyledResultText = styled.h2`
  display: flex;
  gap: 4px;
  padding: 20px 0;
  font-size: 14px;
  color: var(--gray-1);
  justify-content: center;
`;

const StyledTagWrapper = styled.span`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: var(--gray-5);
  border: none;
  border-radius: 8px;
  line-height: 1px;
  height: 20px;
  font-size: 12px;
`;

const StyledSpanText = styled.span`
  display: flex;
  align-items: center;
`;

TaggedResult.displayName = 'TaggedResult';

export default TaggedResult;
