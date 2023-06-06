import HamburgerMenu from './hamburger/HamburgerMenu';
import RegularNav from './RegularNav';
import { useWindowWidth } from '../../context/WindowWidthContext';
import { ReactNode } from 'react';

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
