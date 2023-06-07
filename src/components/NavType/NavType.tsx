import HamburgerMenu from './hamburger/HamburgerMenu';
import RegularNav from './RegularNav';
import { ReactNode } from 'react';
import { useWindowWidth } from '../../context/WindowWidthContext';

interface Props {
  children: ReactNode;
}

const NavType = ({ children }: Props) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <RegularNav>{children}</RegularNav>
  ) : (
    <HamburgerMenu>{children}</HamburgerMenu>
  );
};

export default NavType;
