import { useEffect, useRef, useState } from 'react';

function useDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOutsideClick = (e: Event) => {
    const current = dropdownRef.current;
    if (isOpen && current && !current.contains(e.target as Node))
      setIsOpen(false);
  };

  return { isOpen, dropdownRef, toggleDropdown };
}

export default useDropdown;
