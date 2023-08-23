import { ReactNode } from 'react';
import { WindowWidthProvider } from '../../context/WindowWidthContext';
import NavType from '../NavType/NavType';

interface Props {
  children: ReactNode;
  className?: string;
}

const Nav = ({ children, className }: Props) => {
  return (
    <WindowWidthProvider>
      <NavType className={className}>{children}</NavType>
    </WindowWidthProvider>
  );
};

export default Nav;
