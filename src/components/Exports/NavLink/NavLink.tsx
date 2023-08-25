import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignedButton, AlignedLink } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import NavLinkHamburger from './NavLinkHamburger';

const StyledLink = styled(AlignedLink)<{ $isIcon: boolean }>`
  padding: 0;
  margin: 0;
  line-height: ${({ $isIcon }) => ($isIcon ? '0' : 'normal')};
`;

interface CustomNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  showText?: boolean;
  to: string;
  icon?: ReactNode;
  className?: string;
  dataTestid?: string;
  isActive?: boolean;
  end?: boolean;
}

const NavLink = ({
  text,
  showText = true,
  to,
  icon,
  className,
  dataTestid,
  isActive,
  end = false,
  ...props
}: CustomNavLinkProps) => {
  const isNormalView = useWindowWidth();

  return isNormalView ? (
    <li className={className}>
      <AlignedButton>
        <StyledLink
          to={to}
          $isIcon={!!icon}
          data-testid={dataTestid}
          className={({ isActive: builtInActive, isPending }) => {
            console.log('builtInActive', builtInActive);
            console.log('isPending', isPending);

            return isActive ? 'active' : '';
          }}
          end={end}
          {...props}
        >
          {icon && icon}
          {showText && <span>{text}</span>}
        </StyledLink>
      </AlignedButton>
    </li>
  ) : (
    <NavLinkHamburger text={text} to={to} className={className} dataTestid={dataTestid} />
  );
};

export default NavLink;
