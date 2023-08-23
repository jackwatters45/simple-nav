import { jsx as _jsx } from "react/jsx-runtime";
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuIcon from '../../../assets/MenuIcon';
const MenuButton = ({ buttonProps }) => {
    return (_jsx(AlignedButton, { ...buttonProps, className: "hamburger-menu-button", children: _jsx(MenuIcon, {}) }));
};
export default MenuButton;
