import { FormEvent, memo, useReducer, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import closeIcon from '@assets/icons/close.svg';
import { inputHandler } from '@utils/reducerHandler';
import useDebounce from '@hooks/useDebounce';
import { useSearchPreview } from '@hooks/useGetQueries';
import PreviewList from '@components/search/PreviewList';
import useClickOutside from '@hooks/useClickOutside';

const SearchBar = memo(() => {
  const navigate = useNavigate();
  const [searchText, dispatch] = useReducer(inputHandler, '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const debouncedSearchText = useDebounce(searchText, 300);
  const { data: searchData } = useSearchPreview(debouncedSearchText);
  const searchBarRef = useRef(null);

  useClickOutside(searchBarRef, () => setIsFocused(false));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
    dispatch({ type: 'clear' });
  };

  return (
    <StyledForm onSubmit={handleSubmit} ref={searchBarRef}>
      <StyledSearchBar
        type="text"
        value={searchText}
        placeholder="검색어를 입력해주세요."
        onChange={(event) => dispatch({ type: 'input', event })}
        required
        onFocus={() => setIsFocused(true)}
      />
      {searchText && (
        <StyledBtn type="button" onClick={() => dispatch({ type: 'clear' })}>
          <img alt="clear" src={closeIcon} />
        </StyledBtn>
      )}
      {searchData && isFocused && (
        <PreviewList
          searchText={debouncedSearchText}
          contents={searchData.contents.data}
          talkContents={searchData.talkContents.data}
        />
      )}
    </StyledForm>
  );
});

const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
`;

const StyledSearchBar = styled.input`
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

SearchBar.displayName = 'SearchBar';

export default SearchBar;
