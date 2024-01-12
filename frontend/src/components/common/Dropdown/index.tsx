import useDropdown from '@hooks/useDropdown';
import { memo, useState } from 'react';
import styled from 'styled-components';
import upArrow from '@assets/icons/arrow-up.svg';
import downArrow from '@assets/icons/arrow-down.svg';

const DROPDOWN_OPTIONS = [
  { id: 1, option: '최신순' },
  { id: 2, option: '좋아요 많은순' },
  { id: 3, option: '댓글 많은순' },
];

const Dropdown = memo(() => {
  const [sortType, setSortType] = useState<string>('최신순');
  const { isOpen, dropdownRef, toggleDropdown } = useDropdown();
  const handleSortType = (selectedSort: string) => {
    setSortType(selectedSort);
    toggleDropdown();
  };

  return (
    <StyledWrapper ref={dropdownRef}>
      <StyledDropdownBtn onClick={toggleDropdown}>
        <StyledSortOption>{sortType}</StyledSortOption>
        <StyledArrow src={isOpen ? upArrow : downArrow} />
      </StyledDropdownBtn>
      {isOpen && (
        <DropdownMenu>
          {DROPDOWN_OPTIONS.map(({ id, option }) => (
            <DropdownOption key={id} onClick={() => handleSortType(option)}>
              {option}
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </StyledWrapper>
  );
});

Dropdown.displayName = 'Dropdown';

const StyledWrapper = styled.div`
  position: relative;
  width: 120px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--white);
  text-align: center;
  border-radius: 8px;
  border: 1px solid var(--gray-1);
`;
const StyledDropdownBtn = styled.div`
  position: relative;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSortOption = styled.div``;

const StyledArrow = styled.img`
  width: 12px;
  height: 12px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid var(--gray-1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 9;
  background-color: var(--white);
`;

const DropdownOption = styled.li`
  padding: 12px;
  cursor: pointer;
  &:hover {
    background-color: var(--primary);
  }
`;

export default Dropdown;
