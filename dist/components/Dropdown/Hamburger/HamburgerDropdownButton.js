"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const MenuDownIcon_1 = __importDefault(require("../../../assets/MenuDownIcon"));
const MenuRightIcon_1 = __importDefault(require("../../../assets/MenuRightIcon"));
const StyledHamburgerDropdownButton = (0, styled_components_1.styled)(sharedComponents_1.AlignedButton) `
  font-size: 2rem;
  font-weight: 700;
  gap: 0.5rem;
`;
const HamburgerDropdownButton = ({ text, isOpen, toggleIsOpen }) => {
    return ((0, jsx_runtime_1.jsxs)(StyledHamburgerDropdownButton, { className: `hamburger-dropdown-button`, onClick: toggleIsOpen, children: [isOpen ? (0, jsx_runtime_1.jsx)(MenuDownIcon_1.default, {}) : (0, jsx_runtime_1.jsx)(MenuRightIcon_1.default, {}), text] }));
};
exports.default = HamburgerDropdownButton;
