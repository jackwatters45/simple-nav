import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignComponent } from '../../../styles/sharedComponents';
import { NavLink as Link } from 'react-router-dom';
import { styled } from 'styled-components';
import NavLinkHamburger from './NavLinkHamburger';
const StyledLink = styled(Link) `
  padding: 0;
  margin: 0;
`;
export const StyledNavLi = styled.li `
  ${AlignComponent}
`;
const NavLink = ({ text, to, icon, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx(StyledLink, { to: to, children: _jsxs(StyledNavLi, { className: className, children: [icon && icon, text] }) })) : (_jsx(NavLinkHamburger, { text: text, to: to, className: className }));
};
export default NavLink;
