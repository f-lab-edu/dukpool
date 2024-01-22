import { FormEvent, memo, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import closeIcon from '@assets/icons/close.svg';
import { inputHandler } from '@utils/reducerHandler';
import { media } from '@styles/media';

const Input = memo(() => {
  const [searchText, dispatch] = useReducer(inputHandler, '');

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={searchText}
          placeholder="검색어를 입력해주세요."
          onChange={(event) => dispatch({ type: 'input', event })}
        />
        {searchText && (
          <StyledBtn type="button" onClick={() => dispatch({ type: 'clear' })}>
            <img src={closeIcon} />
          </StyledBtn>
        )}
      </StyledForm>
    </StyledSection>
  );
});

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  margin-bottom: 0;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 0 30px;
  border: 1px solid var(--gray-4);
  border-radius: 12px;
  font-size: 14px;
  width: 100%;
  height: 100%;
  overflox: hidden;
  &:focus {
    outline: 1px solid var(--primary);
  }
`;

const StyledBtn = styled.button`
  position: absolute;
  right: 0;
  transform: translateY(5%);
  border: none;
  background-color: transparent;
  outline: none;
`;

Input.displayName = 'Input';

export default Input;
