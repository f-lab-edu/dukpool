import { memo, useReducer } from 'react';
import styled from 'styled-components';
import Button from '@components/common/Button';
import { textAreaHandler } from '@utils/reducerHandler';
import { UseMutateFunction } from '@tanstack/react-query';

type TextAreaProps = {
  previousValue?: string;
  buttonText: string;
  buttonHandler: UseMutateFunction<
    void,
    Error,
    {
      id: number;
      comment: string;
    },
    unknown
  >;
  id: number;
};

const TextArea = memo(
  ({ previousValue, buttonText, buttonHandler, id }: TextAreaProps) => {
    const [textValue, dispatch] = useReducer(
      textAreaHandler,
      previousValue ?? '',
    );
    const handleButton = () => {
      buttonHandler({ id, comment: textValue });
    };
    return (
      <StyledContainer>
        <StyledTextArea
          value={textValue}
          disabled={false}
          placeholder="asd"
          onChange={(event) => dispatch({ type: 'input', event })}
        />
        <StyledButtonContainer>
          <StyledButtonWrapper>
            <Button
              text={buttonText}
              onClick={handleButton}
              disabled={false}
              $colorType="dark"
            />
          </StyledButtonWrapper>
        </StyledButtonContainer>
      </StyledContainer>
    );
  },
);

TextArea.displayName = 'TextArea';

const StyledContainer = styled.div``;

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  font-size: 16px;
  border-radius: 15px;
  box-sizing: border-box;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonWrapper = styled.div`
  width: 100px;
`;

export default TextArea;
