"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const MenuIcon_1 = __importDefault(require("../../../assets/MenuIcon"));
const MenuButton = ({ buttonProps }) => {
    return ((0, jsx_runtime_1.jsx)(sharedComponents_1.AlignedButton, { ...buttonProps, className: "hamburger-menu-button", children: (0, jsx_runtime_1.jsx)(MenuIcon_1.default, {}) }));
};
exports.default = MenuButton;
