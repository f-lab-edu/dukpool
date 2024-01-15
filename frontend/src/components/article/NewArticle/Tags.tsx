import { memo, useState } from 'react';
import { useAtom } from 'jotai';
import { tagsAtom } from '@atoms/postStateAtom';
import styled from 'styled-components';
import Tag from '@components/common/Tag';

const Tags = memo(() => {
  const [tagItem, setTagItem] = useState<string>('');
  const [tags, setTags] = useAtom(tagsAtom);

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (
      target.value.length &&
      event.key === 'Enter' &&
      !tags.includes(target.value) &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      setTags([...tags, tagItem]);
      setTagItem('');
    }
  };

  return (
    <StyledLabelContainer>
      <StyledLabel>
        <StyledFormTitle>태그</StyledFormTitle>
        <StyledInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTagItem(e.target.value)
          }
          type="text"
          value={tagItem}
          onKeyDown={onKeyPress}
          placeholder="Enter를 눌러 관련있는 태그를 추가해보세요."
        />
        <StyledTagsContainer>
          {tags.map((tag: string) => (
            <Tag
              buttonHandler={() => handleDeleteTag(tag)}
              key={tag}
              tagName={tag}
            />
          ))}
        </StyledTagsContainer>
      </StyledLabel>
    </StyledLabelContainer>
  );
});

Tags.displayName = 'Tags';

const StyledLabelContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledFormTitle = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-4);
  margin-bottom: 4px;
`;

const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default Tags;
