"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const StyledSvg = styled_components_1.styled.svg `
  width: ${({ width }) => width ?? 24}px;
  height: ${({ width }) => width ?? 24}px;
  & path {
    fill: ${(props) => props?.theme.colors.textPrimary};
  }
`;
const Icon = ({ path, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(StyledSvg, { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: path }) }));
};
exports.default = Icon;
