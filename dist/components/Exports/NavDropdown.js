import { jsx as _jsx } from "react/jsx-runtime";
import { useWindowWidth } from '../../context/WindowWidthContext';
import NormalDropdown from '../Dropdown/Normal/NormalDropdown';
import HamburgerDropdown from '../Dropdown/Hamburger/HamburgerDropdown';
const NavDropdown = ({ children, buttonOptions, className }) => {
    const isNormalView = useWindowWidth();
    return isNormalView ? (_jsx(NormalDropdown, { buttonOptions: buttonOptions, className: className, children: children })) : (_jsx(HamburgerDropdown, { buttonOptions: buttonOptions, className: className, children: children }));
};
export default NavDropdown;
