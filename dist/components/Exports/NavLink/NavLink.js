"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WindowWidthContext_1 = require("../../../context/WindowWidthContext");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const styled_components_1 = require("styled-components");
const NavLinkHamburger_1 = __importDefault(require("./NavLinkHamburger"));
const StyledLink = (0, styled_components_1.styled)(sharedComponents_1.AlignedLink) `
  padding: 0;
  margin: 0;
  line-height: ${({ $isIcon }) => ($isIcon ? '0' : 'normal')};
`;
const NavLink = ({ text, showText = true, to, icon, className }) => {
    const isNormalView = (0, WindowWidthContext_1.useWindowWidth)();
    return isNormalView ? ((0, jsx_runtime_1.jsx)("li", { className: className, children: (0, jsx_runtime_1.jsx)(sharedComponents_1.AlignedButton, { children: (0, jsx_runtime_1.jsxs)(StyledLink, { to: to, "$isIcon": !!icon, children: [icon && icon, showText && text] }) }) })) : ((0, jsx_runtime_1.jsx)(NavLinkHamburger_1.default, { text: text, to: to, className: className }));
};
exports.default = NavLink;
