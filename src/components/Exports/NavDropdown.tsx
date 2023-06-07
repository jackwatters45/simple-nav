import { useWindowWidth } from '../../context/WindowWidthContext';
import NormalDropdown from '../Dropdown/Normal/NormalDropdown';
import HamburgerDropdown from '../Dropdown/Hamburger/HamburgerDropdown';
import { ButtonOptions } from '../../../types/ButtonProps.d';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
}

const NavDropdown = ({ children, buttonOptions }: Props) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <NormalDropdown buttonOptions={buttonOptions}>{children}</NormalDropdown>
  ) : (
    <HamburgerDropdown buttonOptions={buttonOptions}>{children}</HamburgerDropdown>
  );
};

export default NavDropdown;
