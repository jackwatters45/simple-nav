import { ReactNode, useState } from 'react';
import { ButtonOptions } from '../../../../types/SharedProps.d';
import HamburgerDropdownContent from './HamburgerDropdownContent';
import HamburgerDropdownButton from './HamburgerDropdownButton';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
}

const HamburgerDropdown = ({ children, buttonOptions }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <div>
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
