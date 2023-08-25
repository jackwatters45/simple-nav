import { ReactNode, useState } from 'react';
import { ButtonOptions } from '../../../../types/ButtonProps.d';
import HamburgerDropdownContent from './HamburgerDropdownContent';
import HamburgerDropdownButton from './HamburgerDropdownButton';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
  className?: string;
  dataTestid?: string;
}

const HamburgerDropdown = ({ children, buttonOptions, className, dataTestid }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className={`${className} hamburger-dropdown`}>
      <HamburgerDropdownButton
        isOpen={isOpen}
        toggleIsOpen={toggleIsOpen}
        data-testid={dataTestid}
        {...buttonOptions}
      />
      <HamburgerDropdownContent isOpen={isOpen}>{children}</HamburgerDropdownContent>
    </div>
  );
};

export default HamburgerDropdown;
