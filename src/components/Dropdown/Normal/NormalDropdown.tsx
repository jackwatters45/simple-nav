import { ReactNode } from 'react';
import { useModalTrigger } from 'react-hook-modal-pure';
import NormalDropdownButton from './NormalDropdownButton';
import { ButtonOptions } from '../../../../types/ButtonProps.d';
import NormalDropdownContent from './NormalDropdownContent';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
  className?: string;
  dataTestid?: string;
}

const NormalDropdown = ({ children, buttonOptions, className, dataTestid }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div className={`${className} normal-dropdown`}>
      <NormalDropdownButton
        buttonProps={buttonProps}
        dataTestid={dataTestid}
        {...buttonOptions}
      />
      {isModalVisible && (
        <NormalDropdownContent useModalParams={useModalParams}>
          {children}
        </NormalDropdownContent>
      )}
    </div>
  );
};

export default NormalDropdown;
