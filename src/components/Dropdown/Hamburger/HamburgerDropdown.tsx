import { ReactNode, useState } from 'react';
import { ButtonOptions } from '../../../../types/ButtonProps.d';
import HamburgerDropdownContent from './HamburgerDropdownContent';
import HamburgerDropdownButton from './HamburgerDropdownButton';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
  className?: string;
}

const HamburgerDropdown = ({ children, buttonOptions, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${className} hamburger-dropdown`}>
      <HamburgerDropdownButton
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        {...buttonOptions}
      />
      <HamburgerDropdownContent isOpen={isOpen}>{children}</HamburgerDropdownContent>
    </div>
  );
};

export default HamburgerDropdown;
