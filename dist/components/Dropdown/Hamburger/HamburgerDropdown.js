"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const HamburgerDropdownContent_1 = __importDefault(require("./HamburgerDropdownContent"));
const HamburgerDropdownButton_1 = __importDefault(require("./HamburgerDropdownButton"));
const HamburgerDropdown = ({ children, buttonOptions, className }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const toggleIsOpen = () => setIsOpen((prev) => !prev);
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${className} hamburger-dropdown`, children: [(0, jsx_runtime_1.jsx)(HamburgerDropdownButton_1.default, { isOpen: isOpen, toggleIsOpen: toggleIsOpen, ...buttonOptions }), (0, jsx_runtime_1.jsx)(HamburgerDropdownContent_1.default, { isOpen: isOpen, children: children })] }));
};
exports.default = HamburgerDropdown;
