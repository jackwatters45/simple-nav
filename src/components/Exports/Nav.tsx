import { ReactNode } from 'react';
import { WindowWidthProvider } from '../../context/WindowWidthContext';
import NavType from '../NavType/NavType';

interface Props {
  children: ReactNode;
}

const Nav = ({ children }: Props) => {
  return (
    <WindowWidthProvider>
      <NavType>{children}</NavType>
    </WindowWidthProvider>
  );
};

export default Nav;
