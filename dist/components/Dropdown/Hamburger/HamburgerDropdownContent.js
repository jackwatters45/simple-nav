"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const CollapsibleList = styled_components_1.styled.div `
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  transition: ${(props) => (props.open ? 'max-height 0.3s ease-in-out' : 'none')};
  z-index: 100;

  button {
    font-size: 1.5rem;
    margin-left: 0rem;
    font-weight: 600;
    cursor: pointer;
  }

  font-size: 2rem;
  font-weight: 700;
`;
const HamburgerDropdownContent = ({ isOpen, children }) => {
    return ((0, jsx_runtime_1.jsx)(CollapsibleList, { open: isOpen, className: `hamburger-dropdown-content`, children: children }));
};
exports.default = HamburgerDropdownContent;
