"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const CloseModalContext_1 = require("../../../context/CloseModalContext");
const sharedComponents_1 = require("../../../styles/sharedComponents");
const styled_components_1 = require("styled-components");
const StyledLink = (0, styled_components_1.styled)(react_router_dom_1.NavLink) `
  padding: 0;
  margin: 0;
`;
const NavLinkHamburger = ({ text, to, className, dataTestid }) => {
    const onClickHamburger = (0, CloseModalContext_1.useCloseModal)();
    return ((0, jsx_runtime_1.jsx)(sharedComponents_1.StyledHamburgerNavDiv, { className: className, children: (0, jsx_runtime_1.jsx)(StyledLink, { onClick: onClickHamburger, to: to, "data-testid": dataTestid, children: text }) }));
};
exports.default = NavLinkHamburger;
