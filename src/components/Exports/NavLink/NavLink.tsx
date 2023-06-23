import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignComponent } from '../../../styles/sharedComponents';
import { NavLink as Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactNode } from 'react';
import NavLinkHamburger from './NavLinkHamburger';

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
`;

export const StyledNavLi = styled.li`
  ${AlignComponent}
`;

interface NavLinkProps {
  text: string;
  to: string;
  icon?: ReactNode;
  className?: string;
}

const NavLink = ({ text, to, icon, className }: NavLinkProps) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <StyledLink to={to}>
      <StyledNavLi className={className}>
        {icon && icon}
        {text}
      </StyledNavLi>
    </StyledLink>
  ) : (
    <NavLinkHamburger text={text} to={to} className={className} />
  );
};

export default NavLink;
