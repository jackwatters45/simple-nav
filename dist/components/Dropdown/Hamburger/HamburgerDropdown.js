import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import HamburgerDropdownContent from './HamburgerDropdownContent';
import HamburgerDropdownButton from './HamburgerDropdownButton';
const HamburgerDropdown = ({ children, buttonOptions, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen((prev) => !prev);
    return (_jsxs("div", { className: `${className} hamburger-dropdown`, children: [_jsx(HamburgerDropdownButton, { isOpen: isOpen, toggleIsOpen: toggleIsOpen, ...buttonOptions }), _jsx(HamburgerDropdownContent, { isOpen: isOpen, children: children })] }));
};
export default HamburgerDropdown;
