import HamburgerMenu from './hamburger/HamburgerMenu';
import RegularNav from './RegularNav';
import { ReactNode } from 'react';
import { useWindowWidth } from '../../context/WindowWidthContext';

interface Props {
  children: ReactNode;
  className?: string;
  dataTestid?: string;
}

const NavType = ({ children, className, dataTestid }: Props) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <RegularNav className={className} dataTestid={dataTestid}>
      {children}
    </RegularNav>
  ) : (
    <HamburgerMenu className={className} dataTestid={dataTestid}>
      {children}
    </HamburgerMenu>
  );
};

export default NavType;
