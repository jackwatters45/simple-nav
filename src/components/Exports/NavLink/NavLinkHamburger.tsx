import { NavLink } from 'react-router-dom';
import { useCloseModal } from '../../../context/CloseModalContext';
import { StyledHamburgerNavDiv } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 0;
  margin: 0;
`;

interface NavLinkProps {
  text?: string;
  to: string;
  className?: string;
  dataTestid?: string;
}

const NavLinkHamburger = ({ text, to, className, dataTestid }: NavLinkProps) => {
  const onClickHamburger = useCloseModal();

  return (
    <StyledHamburgerNavDiv className={className}>
      <StyledLink onClick={onClickHamburger} to={to} data-testid={dataTestid}>
        {text}
      </StyledLink>
    </StyledHamburgerNavDiv>
  );
};

export default NavLinkHamburger;
