import { styled } from 'styled-components';
import { ReactNode } from 'react';

export const RegularNavContainer = styled.div`
  display: flex;
  align-items: center;
`;

interface Props {
  children: ReactNode;
}

const RegularNav = ({ children }: Props) => {
  return <RegularNavContainer>{children}</RegularNavContainer>;
};

export default RegularNav;
