import { useModalTrigger } from 'react-hook-modal-pure';
import HamburgerModal from './HamburgerModal';
import MenuButton from './MenuButton';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const HamburgerMenu = ({ children, className }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div className={`${className} hamburger-menu`}>
      <MenuButton buttonProps={buttonProps} />
      {isModalVisible && (
        <HamburgerModal useModalParams={useModalParams}>{children}</HamburgerModal>
      )}
    </div>
  );
};

export default HamburgerMenu;
