import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';
const NormalDropdownButton = ({ buttonProps, icon, text, includeText = false, includeArrow = true, arrowSize = '.5rem', }) => {
    return (_jsxs(AlignedButton, { ...buttonProps, className: `normal-dropdown-button`, children: [icon && icon, includeText && _jsx("span", { children: text }), includeArrow && _jsx(MenuDownIcon, { size: arrowSize })] }));
};
export default NormalDropdownButton;
