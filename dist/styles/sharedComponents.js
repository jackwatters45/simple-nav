"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledHamburgerNavDiv = exports.AlignedLink = exports.AlignedButton = exports.AlignedDiv = exports.AlignComponent = void 0;
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = require("styled-components");
exports.AlignComponent = (0, styled_components_1.css) `
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;
exports.AlignedDiv = styled_components_1.styled.div `
  ${exports.AlignComponent}
`;
exports.AlignedButton = styled_components_1.styled.button `
  ${exports.AlignComponent}
  background-color: transparent;
`;
exports.AlignedLink = (0, styled_components_1.styled)(react_router_dom_1.NavLink) `
  ${exports.AlignComponent}
`;
exports.StyledHamburgerNavDiv = styled_components_1.styled.div `
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;
