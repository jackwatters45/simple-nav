"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WindowWidthContext_1 = require("../../context/WindowWidthContext");
const NormalDropdown_1 = __importDefault(require("../Dropdown/Normal/NormalDropdown"));
const HamburgerDropdown_1 = __importDefault(require("../Dropdown/Hamburger/HamburgerDropdown"));
const NavDropdown = ({ children, buttonOptions, className, dataTestid }) => {
    const isNormalView = (0, WindowWidthContext_1.useWindowWidth)();
    return isNormalView ? ((0, jsx_runtime_1.jsx)(NormalDropdown_1.default, { buttonOptions: buttonOptions, className: className, dataTestid: dataTestid, children: children })) : ((0, jsx_runtime_1.jsx)(HamburgerDropdown_1.default, { buttonOptions: buttonOptions, className: className, dataTestid: dataTestid, children: children }));
};
exports.default = NavDropdown;
