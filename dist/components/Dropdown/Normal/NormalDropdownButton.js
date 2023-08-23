import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlignedButton } from '../../../styles/sharedComponents';
import MenuDownIcon from '../../../assets/MenuDownIcon';
const NormalDropdownButton = ({ buttonProps, className, icon, text, includeText = true, includeArrow = true, arrowSize = '.5rem', }) => {
    return (_jsxs(AlignedButton, { ...buttonProps, className: `${className} normal-dropdown-button`, children: [icon && icon, includeText && _jsx("span", { children: text }), includeArrow && _jsx(MenuDownIcon, { size: arrowSize })] }));
};
export default NormalDropdownButton;
