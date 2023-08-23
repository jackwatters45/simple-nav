import { jsx as _jsx } from "react/jsx-runtime";
import HamburgerMenu from './hamburger/HamburgerMenu';
import RegularNav from './RegularNav';
import { useWindowWidth } from '../../context/WindowWidthContext';
const NavType = ({ children, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx(RegularNav, { className: className, children: children })) : (_jsx(HamburgerMenu, { className: className, children: children }));
};
export default NavType;
