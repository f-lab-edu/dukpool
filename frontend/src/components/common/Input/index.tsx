import { memo } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  label: string;
  placeholder: string;
  registerType: string;
  required: boolean;
  [key: string]: unknown;
};

const Input = memo(
  ({ label, placeholder, registerType, required, ...options }: InputProps) => {
    const { register } = useFormContext();
    return (
      <StyledLabelContainer>
        <StyledLabel>
          <StyledFormTitle>{label}</StyledFormTitle>
          <StyledInput
            {...register(registerType, { required, ...options })}
            type="text"
            placeholder={placeholder}
          />
        </StyledLabel>
      </StyledLabelContainer>
    );
  },
);

const StyledLabelContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
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

Input.displayName = 'Input';

export default Input;
