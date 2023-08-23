import { useWindowWidth } from '../../context/WindowWidthContext';
import NormalDropdown from '../Dropdown/Normal/NormalDropdown';
import HamburgerDropdown from '../Dropdown/Hamburger/HamburgerDropdown';
import { ButtonOptions } from '../../../types/ButtonProps.d';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
  className?: string;
}

const NavDropdown = ({ children, buttonOptions, className }: Props) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <NormalDropdown buttonOptions={buttonOptions} className={className}>
      {children}
    </NormalDropdown>
  ) : (
    <HamburgerDropdown buttonOptions={buttonOptions} className={className}>
      {children}
    </HamburgerDropdown>
  );
};

export default NavDropdown;
