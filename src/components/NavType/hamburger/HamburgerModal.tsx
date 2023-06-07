import { useModal, useModalParams } from 'react-hook-modal-pure';
import { ReactNode } from 'react';
import { keyframes, styled } from 'styled-components';

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
  className?: string;
}

const HamburgerModal = ({ useModalParams, children, className }: Props) => {
  const modalProps = useModal(useModalParams);

  return (
    <MenuBackground {...modalProps} className={className}>
      <MenuContentContainer>
        <MenuContentHamburger>{children}</MenuContentHamburger>
      </MenuContentContainer>
    </MenuBackground>
  );
};

export default HamburgerModal;
