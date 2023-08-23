import HamburgerMenu from './hamburger/HamburgerMenu';
import RegularNav from './RegularNav';
import { ReactNode } from 'react';
import { useWindowWidth } from '../../context/WindowWidthContext';

interface Props {
  children: ReactNode;
  className?: string;
}

const NavType = ({ children, className }: Props) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <RegularNav className={className}>{children}</RegularNav>
  ) : (
    <HamburgerMenu className={className}>{children}</HamburgerMenu>
  );
};

export default NavType;
