import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import { useCloseModal } from '../../../context/CloseModalContext';
import { StyledHamburgerNavDiv } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';
const StyledLink = styled(NavLink) `
  padding: 0;
  margin: 0;
`;
const NavLinkHamburger = ({ text, to, className }) => {
    const onClickHamburger = useCloseModal();
    return (_jsx(StyledHamburgerNavDiv, { className: className, children: _jsx(StyledLink, { onClick: onClickHamburger, to: to, children: text }) }));
};
export default NavLinkHamburger;
