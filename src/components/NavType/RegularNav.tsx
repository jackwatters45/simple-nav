import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const RegularNav = ({ children, className }: Props) => {
  return <div className={`${className} regular-nav`}>{children}</div>;
};

export default RegularNav;
