"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("./Icon"));
const MenuRightIcon = (props) => {
    return (0, jsx_runtime_1.jsx)(Icon_1.default, { path: 'M10,17L15,12L10,7V17Z', ...props });
};
exports.default = MenuRightIcon;
