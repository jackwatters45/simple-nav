"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WindowWidthContext_1 = require("../../context/WindowWidthContext");
const NavType_1 = __importDefault(require("../NavType/NavType"));
const Nav = ({ children, className, dataTestid }) => {
    return ((0, jsx_runtime_1.jsx)(WindowWidthContext_1.WindowWidthProvider, { children: (0, jsx_runtime_1.jsx)(NavType_1.default, { className: className, dataTestid: dataTestid, children: children }) }));
};
exports.default = Nav;
