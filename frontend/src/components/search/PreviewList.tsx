import { memo } from 'react';
import { ContentResponse } from 'src/@types/content';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchIcon from '@assets/icons/search.svg';

type PreviewListProps = {
  contents: Omit<ContentResponse, 'comment'>[];
  talkContents: Omit<ContentResponse, 'comment'>[];
};

const PreviewList = memo(({ contents, talkContents }: PreviewListProps) => {
  if (!contents.length && !talkContents.length) {
    return null;
  }

  return (
    <StyledPreviewContainer>
      {contents.length > 0 && (
        <StyledSection>
          <StyledSearchSectionTitle>📸 덕질자랑</StyledSearchSectionTitle>
          <ul>
            {contents.map((content) => (
              <Link to={`/article/${content.id}`} key={content.id}>
                <StyledSearchList>
                  <StyledSearchIcon src={searchIcon} />
                  <span>{content.title}</span>
                </StyledSearchList>
              </Link>
            ))}
          </ul>
        </StyledSection>
      )}
      {talkContents.length > 0 && (
        <StyledSection>
          <StyledSearchSectionTitle>🎙️ 덕질토크</StyledSearchSectionTitle>
          <ul>
            {talkContents.map((content) => (
              <Link to={`/talk/${content.id}`} key={content.id}>
                <StyledSearchList>
                  <StyledSearchIcon src={searchIcon} />
                  <span>{content.title}</span>
                </StyledSearchList>
              </Link>
            ))}
          </ul>
        </StyledSection>
      )}
    </StyledPreviewContainer>
  );
});

PreviewList.displayName = 'PreviewList';

const StyledPreviewContainer = styled.div`
  position: absolute;
  top: 55px;
  background-color: var(--white);
  width: 100%;
  z-index: 99;
  border: 1px solid var(--gray-4);
  border-radius: 12px;
  padding: 12px;
`;

const StyledSection = styled.section`
  padding: 8px;
`;

const StyledSearchSectionTitle = styled.h4`
  font-size: 12px;
  color: var(--gray-1);
  margin-bottom: 4px;
`;

const StyledSearchList = styled.li`
  display: flex;
  width: 100%;
  padding: 4px 0;
  gap: 4px;
  font-size: 14px;
  &:hover {
    background-color: var(--gray-6);
  }
`;

const StyledSearchIcon = styled.img`
  width: 12px;
  height: 12px;
`;

export default PreviewList;
