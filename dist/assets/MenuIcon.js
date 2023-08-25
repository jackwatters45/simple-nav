"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Icon_1 = __importDefault(require("./Icon"));
const MenuIcon = (props) => {
    return (0, jsx_runtime_1.jsx)(Icon_1.default, { path: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z', ...props });
};
exports.default = MenuIcon;
