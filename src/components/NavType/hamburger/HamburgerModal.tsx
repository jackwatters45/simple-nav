import { useModal, useModalParams } from 'react-hook-modal-pure';
import { ReactNode } from 'react';
import { keyframes, styled } from 'styled-components';
import { CloseModalProvider } from '../../../context/CloseModalContext';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const MenuBackground = styled.nav`
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

const MenuContentContainer = styled.ul`
  margin-top: 35vh;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MenuContentHamburger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

interface Props {
  useModalParams: useModalParams;
  children: ReactNode;
}

const HamburgerModal = ({ useModalParams, children }: Props) => {
  const modalProps = useModal(useModalParams);
  const { closeModal } = useModalParams;

  return (
    <MenuBackground {...modalProps} className="hamburger-modal">
      <MenuContentContainer>
        <CloseModalProvider value={closeModal}>
          <MenuContentHamburger>{children}</MenuContentHamburger>
        </CloseModalProvider>
      </MenuContentContainer>
    </MenuBackground>
  );
};

export default HamburgerModal;
