import { memo, useState } from 'react';
import styled from 'styled-components';
import Tag from '@components/common/Tag';
import { useFormContext } from 'react-hook-form';

const Tags = memo(() => {
  const [tagItem, setTagItem] = useState<string>('');
  const { setValue, watch } = useFormContext();
  const currentTags: string[] = watch('tags');

  const handleDeleteTag = (tagToDelete: string) => {
    const updatedTags = currentTags.filter((tag) => tag !== tagToDelete);
    setValue('tags', updatedTags);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (
      target.value.length &&
      event.key === 'Enter' &&
      !currentTags.includes(target.value) &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      setValue('tags', [...currentTags, target.value]);
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
          {currentTags.map((tag) => (
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
  margin-top: 30px;
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

const StyledTagsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default Tags;
