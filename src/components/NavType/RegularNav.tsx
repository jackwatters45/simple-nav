import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  dataTestid?: string;
}

const RegularNav = ({ children, className, dataTestid }: Props) => {
  return (
    <div className={`${className} regular-nav`} data-testid={dataTestid}>
      {children}
    </div>
  );
};

export default RegularNav;
