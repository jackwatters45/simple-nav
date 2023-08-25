"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RegularNav = ({ children, className, dataTestid }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: `${className} regular-nav`, "data-testid": dataTestid, children: children }));
};
exports.default = RegularNav;
