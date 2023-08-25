import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignedButton, AlignedLink } from '../../../styles/sharedComponents';
import { styled } from 'styled-components';
import NavLinkHamburger from './NavLinkHamburger';
const StyledLink = styled(AlignedLink) `
  padding: 0;
  margin: 0;
  line-height: ${({ isIcon }) => (isIcon ? '0' : 'normal')};
`;
const NavLink = ({ text, showText = true, to, icon, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx("li", { className: className, children: _jsx(AlignedButton, { children: _jsxs(StyledLink, { to: to, isIcon: !!icon, children: [icon && icon, showText && text] }) }) })) : (_jsx(NavLinkHamburger, { text: text, to: to, className: className }));
};
export default NavLink;
