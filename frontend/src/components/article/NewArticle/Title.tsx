import { ChangeEvent, memo } from 'react';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { titleAtom } from '@atoms/postStateAtom';

const Title = memo(() => {
  const [title, setTitle] = useAtom(titleAtom);
  return (
    <StyledLabelContainer>
      <StyledLabel>
        <StyledFormTitle>제목</StyledFormTitle>
        <StyledInput
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
          value={title}
          type="text"
          required
          placeholder="제목을 입력해주세요."
        />
      </StyledLabel>
    </StyledLabelContainer>
  );
});

Title.displayName = 'Title';

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
`;

export default Title;
