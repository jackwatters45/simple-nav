"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("./Icon"));
const MenuDownIcon = (props) => {
    return (0, jsx_runtime_1.jsx)(Icon_1.default, { path: 'M7,10L12,15L17,10H7Z', ...props });
};
exports.default = MenuDownIcon;
