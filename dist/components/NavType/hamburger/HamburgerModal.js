"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBackground = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_modal_pure_1 = require("react-hook-modal-pure");
const styled_components_1 = require("styled-components");
const CloseModalContext_1 = require("../../../context/CloseModalContext");
const slideIn = (0, styled_components_1.keyframes) `
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
exports.MenuBackground = styled_components_1.styled.nav `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;

  body {
    overflow: hidden;
  }

  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  animation: ${slideIn} 0.4s ease-in-out;
`;
const MenuContentContainer = styled_components_1.styled.ul `
  margin-top: 35vh;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const MenuContentHamburger = styled_components_1.styled.div `
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const HamburgerModal = ({ useModalParams, children }) => {
    const modalProps = (0, react_hook_modal_pure_1.useModal)({
        ...useModalParams,
        options: { rightPositionDistance: 16 },
    });
    const { closeModal } = useModalParams;
    return ((0, jsx_runtime_1.jsx)(exports.MenuBackground, { ...modalProps, className: "hamburger-modal", children: (0, jsx_runtime_1.jsx)(MenuContentContainer, { children: (0, jsx_runtime_1.jsx)(CloseModalContext_1.CloseModalProvider, { value: closeModal, children: (0, jsx_runtime_1.jsx)(MenuContentHamburger, { children: children }) }) }) }));
};
exports.default = HamburgerModal;
