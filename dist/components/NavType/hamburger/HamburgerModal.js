import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from 'react-hook-modal-pure';
import { keyframes, styled } from 'styled-components';
import { CloseModalProvider } from '../../../context/CloseModalContext';
const slideIn = keyframes `
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;
export const MenuBackground = styled.nav `
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
const MenuContentContainer = styled.ul `
  margin-top: 35vh;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const MenuContentHamburger = styled.div `
  display: flex;
  flex-direction: column;
  align-items: left;
`;
const HamburgerModal = ({ useModalParams, children }) => {
    const modalProps = useModal({
        ...useModalParams,
        options: { rightPositionDistance: 16 },
    });
    const { closeModal } = useModalParams;
    return (_jsx(MenuBackground, { ...modalProps, className: "hamburger-modal", children: _jsx(MenuContentContainer, { children: _jsx(CloseModalProvider, { value: closeModal, children: _jsx(MenuContentHamburger, { children: children }) }) }) }));
};
export default HamburgerModal;
