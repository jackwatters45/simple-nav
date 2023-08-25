"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WindowWidthContext_1 = require("../../../context/WindowWidthContext");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const NavButtonHamburger_1 = __importDefault(require("./NavButtonHamburger"));
const NavButton = ({ text, onClick, icon, className }) => {
    const isNormalView = (0, WindowWidthContext_1.useWindowWidth)();
    return isNormalView ? ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)(sharedComponents_1.AlignedButton, { className: className, onClick: onClick, children: [icon && icon, (0, jsx_runtime_1.jsx)("p", { children: text })] }) })) : ((0, jsx_runtime_1.jsx)(NavButtonHamburger_1.default, { text: text, onClick: onClick, className: className }));
};
exports.default = NavButton;
