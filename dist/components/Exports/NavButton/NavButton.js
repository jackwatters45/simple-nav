import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignedButton } from '../../../styles/sharedComponents';
import NavButtonHamburger from './NavButtonHamburger';
const NavButton = ({ text, onClick, icon, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx("li", { children: _jsxs(AlignedButton, { className: className, onClick: onClick, children: [icon && icon, text] }) })) : (_jsx(NavButtonHamburger, { text: text, onClick: onClick, className: className }));
};
export default NavButton;
