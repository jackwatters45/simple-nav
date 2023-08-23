import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useCloseModal } from '../../../context/CloseModalContext';
import { StyledHamburgerNavLi } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';
const StyledLink = styled(Link) `
  padding: 0;
  margin: 0;
`;
const NavLinkHamburger = ({ text, to, className }) => {
    const onClickHamburger = useCloseModal();
    return (_jsx(StyledHamburgerNavLi, { className: className, children: _jsx(StyledLink, { onClick: onClickHamburger, to: to, children: text }) }));
};
export default NavLinkHamburger;
