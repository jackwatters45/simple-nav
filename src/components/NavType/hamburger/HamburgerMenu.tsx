import { useModalTrigger } from 'react-hook-modal-pure';
import HamburgerModal from './HamburgerModal';
import MenuButton from './MenuButton';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const HamburgerMenu = ({ children }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div>
      <MenuButton buttonProps={buttonProps} />
      {isModalVisible && (
        <HamburgerModal useModalParams={useModalParams}>{children}</HamburgerModal>
      )}
    </div>
  );
};

export default HamburgerMenu;
