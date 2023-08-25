"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const CloseModalContext_1 = require("../../../context/CloseModalContext");
const NavButtonHamburger = ({ text, onClick, className, dataTestid }) => {
    const onClickHamburger = (0, CloseModalContext_1.useCloseModal)(onClick);
    return ((0, jsx_runtime_1.jsx)(sharedComponents_1.StyledHamburgerNavDiv, { className: className, children: (0, jsx_runtime_1.jsx)("button", { onClick: onClickHamburger, "data-testid": dataTestid, children: text }) }));
};
exports.default = NavButtonHamburger;
