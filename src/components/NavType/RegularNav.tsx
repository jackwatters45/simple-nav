import { styled } from 'styled-components';
import { ReactNode } from 'react';

export const RegularNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
`;

interface Props {
  children: ReactNode;
  className?: string;
}

const RegularNav = ({ children, className }: Props) => {
  return (
    <RegularNavContainer className={`${className} regular-nav`}>
      {children}
    </RegularNavContainer>
  );
};

export default RegularNav;
