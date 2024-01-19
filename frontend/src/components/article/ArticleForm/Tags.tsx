import { memo, useState } from 'react';
import styled from 'styled-components';
import Tag from '@components/common/Tag';
import { UseFormSetValue } from 'react-hook-form';

type FormValues = {
  title: string;
  tags: string[];
  content: string;
  images: string[] | File[];
};

type TagsProps = {
  tagList: string[];
  setValue: UseFormSetValue<FormValues>;
};

const Tags = memo(({ tagList, setValue }: TagsProps) => {
  const [tagItem, setTagItem] = useState<string>('');

  const handleDeleteTag = (tagToDelete: string) => {
    const updatedTags = tagList.filter((tag: any) => tag !== tagToDelete);
    setValue('tags', updatedTags);
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (
      target.value.length &&
      event.key === 'Enter' &&
      !tagList.includes(target.value) &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      setValue('tags', [...tagList, target.value]);
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
          {tagList.map((tag: string) => (
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

const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export default Tags;
