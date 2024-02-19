import useDropdown from '@hooks/useDropdown';
import { Dispatch, memo } from 'react';
import styled from 'styled-components';
import upArrow from '@assets/icons/arrow-up.svg';
import downArrow from '@assets/icons/arrow-down.svg';

const DROPDOWN_OPTIONS = [
  { type: '', name: '최신순' },
  { type: 'like', name: '좋아요 많은 순' },
  { type: 'commentcount', name: '댓글 많은 순' },
];

const Dropdown = memo(
  ({
    sortType,
    setSortType,
  }: {
    sortType: string;
    setSortType: Dispatch<React.SetStateAction<string>>;
  }) => {
    const { isOpen, dropdownRef, toggleDropdown } = useDropdown();

    const currentSortType = (sortType: string) => {
      return DROPDOWN_OPTIONS.find((option) => option.type === sortType)?.name;
    };

    const handleSortType = (selectedType: string) => {
      setSortType(selectedType);
      toggleDropdown();
    };

    return (
      <StyledWrapper ref={dropdownRef}>
        <StyledDropdownBtn onClick={toggleDropdown}>
          <StyledSortOption>{currentSortType(sortType)}</StyledSortOption>
          <StyledArrow src={isOpen ? upArrow : downArrow} />
        </StyledDropdownBtn>
        {isOpen && (
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({ type, name }) => (
              <DropdownOption key={type} onClick={() => handleSortType(type)}>
                {name}
              </DropdownOption>
            ))}
          </DropdownMenu>
        )}
      </StyledWrapper>
    );
  },
);

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
