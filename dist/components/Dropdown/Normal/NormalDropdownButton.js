"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const MenuDownIcon_1 = __importDefault(require("../../../assets/MenuDownIcon"));
const NormalDropdownButton = ({ buttonProps, icon, text, includeText = false, includeArrow = true, arrowSize = '.5rem', dataTestid, }) => {
    return ((0, jsx_runtime_1.jsxs)(sharedComponents_1.AlignedButton, { ...buttonProps, className: `normal-dropdown-button`, "data-testid": dataTestid, children: [icon && icon, includeText && (0, jsx_runtime_1.jsx)("span", { children: text }), includeArrow && (0, jsx_runtime_1.jsx)(MenuDownIcon_1.default, { size: arrowSize })] }));
};
exports.default = NormalDropdownButton;
