import { ReactNode } from 'react';
import { useModalTrigger } from 'react-hook-modal-pure';
import NormalDropdownButton from './NormalDropdownButton';
import { ButtonOptions } from '../../../../types/ButtonProps.d';
import NormalDropdownContent from './NormalDropdownContent';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
  className?: string;
}

const NormalDropdown = ({ children, buttonOptions, className }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div className={`${className} normal-dropdown`}>
      <NormalDropdownButton buttonProps={buttonProps} {...buttonOptions} />
      {isModalVisible && (
        <NormalDropdownContent useModalParams={useModalParams}>
          {children}
        </NormalDropdownContent>
      )}
    </div>
  );
};

export default NormalDropdown;
