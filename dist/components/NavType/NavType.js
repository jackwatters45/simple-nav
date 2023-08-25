"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HamburgerMenu_1 = __importDefault(require("./hamburger/HamburgerMenu"));
const RegularNav_1 = __importDefault(require("./RegularNav"));
const WindowWidthContext_1 = require("../../context/WindowWidthContext");
const NavType = ({ children, className, dataTestid }) => {
    const isNormalView = (0, WindowWidthContext_1.useWindowWidth)();
    return isNormalView ? ((0, jsx_runtime_1.jsx)(RegularNav_1.default, { className: className, dataTestid: dataTestid, children: children })) : ((0, jsx_runtime_1.jsx)(HamburgerMenu_1.default, { className: className, dataTestid: dataTestid, children: children }));
};
exports.default = NavType;
