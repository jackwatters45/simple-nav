import { ReactNode } from 'react';
import { WindowWidthProvider } from '../../context/WindowWidthContext';
import NavType from '../NavType/NavType';

interface Props {
  children: ReactNode;
  className?: string;
  dataTestid?: string;
}

const Nav = ({ children, className, dataTestid }: Props) => {
  return (
    <WindowWidthProvider>
      <NavType className={className} dataTestid={dataTestid}>
        {children}
      </NavType>
    </WindowWidthProvider>
  );
};

export default Nav;
