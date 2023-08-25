"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_modal_pure_1 = require("react-hook-modal-pure");
const styled_components_1 = require("styled-components");
const Container = styled_components_1.styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 100;

  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  margin-top: 4px;
  ${(props) => props?.theme?.shadow};
`;
const NormalDropdownContent = ({ useModalParams, children }) => {
    const modalProps = (0, react_hook_modal_pure_1.useModal)({
        ...useModalParams,
        options: { rightPositionDistance: 16 },
    });
    return ((0, jsx_runtime_1.jsx)(Container, { ...modalProps, className: `normal-dropdown-content`, children: children }));
};
exports.default = NormalDropdownContent;
