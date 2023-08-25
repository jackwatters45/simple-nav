"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_modal_pure_1 = require("react-hook-modal-pure");
const HamburgerModal_1 = __importDefault(require("./HamburgerModal"));
const MenuButton_1 = __importDefault(require("./MenuButton"));
const HamburgerMenu = ({ children, className, dataTestid }) => {
    const { isModalVisible, buttonProps, useModalParams } = (0, react_hook_modal_pure_1.useModalTrigger)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${className} hamburger-menu`, "data-testid": dataTestid, children: [(0, jsx_runtime_1.jsx)(MenuButton_1.default, { buttonProps: buttonProps }), isModalVisible && ((0, jsx_runtime_1.jsx)(HamburgerModal_1.default, { useModalParams: useModalParams, children: children }))] }));
};
exports.default = HamburgerMenu;
