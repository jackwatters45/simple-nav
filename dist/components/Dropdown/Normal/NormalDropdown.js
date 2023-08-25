"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_modal_pure_1 = require("react-hook-modal-pure");
const NormalDropdownButton_1 = __importDefault(require("./NormalDropdownButton"));
const NormalDropdownContent_1 = __importDefault(require("./NormalDropdownContent"));
const NormalDropdown = ({ children, buttonOptions, className }) => {
    const { isModalVisible, buttonProps, useModalParams } = (0, react_hook_modal_pure_1.useModalTrigger)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `${className} normal-dropdown`, children: [(0, jsx_runtime_1.jsx)(NormalDropdownButton_1.default, { buttonProps: buttonProps, ...buttonOptions }), isModalVisible && ((0, jsx_runtime_1.jsx)(NormalDropdownContent_1.default, { useModalParams: useModalParams, children: children }))] }));
};
exports.default = NormalDropdown;
