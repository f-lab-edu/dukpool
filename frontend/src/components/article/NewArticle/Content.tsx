import { contentAtom } from '@atoms/postStateAtom';
import useInnerHeight from '@hooks/useInnerHeight';
import { useAtom } from 'jotai';
import { ChangeEvent, memo } from 'react';
import styled from 'styled-components';

const Content = memo(() => {
  const { height } = useInnerHeight();
  const [content, setContent] = useAtom(contentAtom);
  return (
    <StyledLabelContainer>
      <StyledLabel>
        <StyledFormTitle>내용</StyledFormTitle>
        <StyledTextArea
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setContent(event.target.value)
          }
          value={content}
          $height={height}
          placeholder="최소 10자의 내용을 입력해주세요."
          required
        />
      </StyledLabel>
    </StyledLabelContainer>
  );
});

Content.displayName = 'Content';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabelContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledFormTitle = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledTextArea = styled.textarea<{ $height: number }>`
  height: ${({ $height }) => `${$height - 50}vh`};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-4);
`;

export default Content;
