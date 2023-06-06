import { useWindowWidth } from '../../../context/WindowWidthContext';
import NormalDropdown from './Normal/NormalDropdown';
import HamburgerDropdown from './Hamburger/HamburgerDropdown';
import { ButtonOptions } from '../../../../types/SharedProps';
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
