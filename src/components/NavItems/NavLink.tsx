import { useWindowWidth } from '../../context/WindowWidthContext';
import { AlignComponent, StyledHamburgerNavLi } from '../../styles/sharedComponents';
import { NavLink as Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactNode } from 'react';

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
    <StyledHamburgerNavLi className={className}>
      <StyledLink to={to}>{text}</StyledLink>
    </StyledHamburgerNavLi>
  );
};

export default NavLink;
