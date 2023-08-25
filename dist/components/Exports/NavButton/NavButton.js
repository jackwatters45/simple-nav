import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useWindowWidth } from '../../../context/WindowWidthContext';
import { AlignedButton } from '../../../styles/sharedComponents';
import NavButtonHamburger from './NavButtonHamburger';
const NavButton = ({ text, onClick, icon, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx("li", { children: _jsxs(AlignedButton, { className: className, onClick: onClick, children: [icon && icon, _jsx("p", { children: text })] }) })) : (_jsx(NavButtonHamburger, { text: text, onClick: onClick, className: className }));
};
export default NavButton;
