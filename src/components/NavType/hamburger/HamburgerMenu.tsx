import { useModalTrigger } from 'react-hook-modal-pure';
import HamburgerModal from './HamburgerModal';
import MenuButton from './MenuButton';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  dataTestid?: string;
}

const HamburgerMenu = ({ children, className, dataTestid }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div className={`${className} hamburger-menu`} data-testid={dataTestid}>
      <MenuButton buttonProps={buttonProps} />
      {isModalVisible && (
        <HamburgerModal useModalParams={useModalParams}>{children}</HamburgerModal>
      )}
    </div>
  );
};

export default HamburgerMenu;
