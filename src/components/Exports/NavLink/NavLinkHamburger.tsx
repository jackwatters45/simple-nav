import { Link } from 'react-router-dom';
import { useCloseModal } from '../../../context/CloseModalContext';
import { StyledHamburgerNavLi } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
`;

interface NavLinkProps {
  text: string;
  to: string;
  className?: string;
}

const NavLinkHamburger = ({ text, to, className }: NavLinkProps) => {
  const onClickHamburger = useCloseModal();

  return (
    <StyledHamburgerNavLi className={className}>
      <StyledLink onClick={onClickHamburger} to={to}>
        {text}
      </StyledLink>
    </StyledHamburgerNavLi>
  );
};

export default NavLinkHamburger;
