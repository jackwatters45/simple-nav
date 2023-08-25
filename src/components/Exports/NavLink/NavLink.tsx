import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignedButton, AlignedLink } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';
import { ReactNode } from 'react';
import NavLinkHamburger from './NavLinkHamburger';

const StyledLink = styled(AlignedLink)<{ isIcon: boolean }>`
  padding: 0;
  margin: 0;
  line-height: ${({ isIcon }) => (isIcon ? '0' : 'normal')};
`;

interface NavLinkProps {
  text: string;
  showText?: boolean;
  to: string;
  icon?: ReactNode;
  className?: string;
}

const NavLink = ({ text, showText = true, to, icon, className }: NavLinkProps) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <li className={className}>
      <AlignedButton>
        <StyledLink to={to} isIcon={!!icon}>
          {icon && icon}
          {showText && text}
        </StyledLink>
      </AlignedButton>
    </li>
  ) : (
    <NavLinkHamburger text={text} to={to} className={className} />
  );
};

export default NavLink;
