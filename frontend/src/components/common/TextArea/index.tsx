import { memo } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import useInnerHeight from '@hooks/useInnerHeight';

type TextAreaProps = {
  label?: string;
  placeholder: string;
  registerType: string;
  required: boolean;
  disabled?: boolean;
  isComment?: boolean;
  [key: string]: unknown;
};

const TextArea = memo(
  ({
    label,
    placeholder,
    registerType,
    required,
    disabled = false,
    isComment = false,
    ...options
  }: TextAreaProps) => {
    const { height } = useInnerHeight();
    const { register } = useFormContext();
    return (
      <StyledLabelContainer $isComment={isComment}>
        <StyledLabel>
          {label && <StyledFormTitle>{label}</StyledFormTitle>}
          <StyledTextArea
            {...register(registerType, { required, ...options })}
            $height={height}
            $isComment={isComment}
            placeholder={placeholder}
            disabled={disabled}
            required
          />
        </StyledLabel>
      </StyledLabelContainer>
    );
  },
);

TextArea.displayName = 'TextArea';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabelContainer = styled.div<{ $isComment: boolean }>`
  width: 100%;
  margin-top: ${({ $isComment }) => ($isComment ? `0px` : `30px`)};
  margin-bottom: 8px;
`;

const StyledFormTitle = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledTextArea = styled.textarea<{
  $height: number;
  $isComment: boolean;
}>`
  height: ${({ $height, $isComment }) =>
    $isComment ? `${$height - 85}vh` : `${$height - 50}vh`};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-4);
  resize: none;
`;

export default TextArea;
