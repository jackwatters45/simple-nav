import { ReactNode } from 'react';
import { useModalTrigger } from 'react-hook-modal-pure';
import NormalDropdownButton from './NormalDropdownButton';
import { ButtonOptions } from '../../../../../types/SharedProps';
import NormalDropdownContent from './NormalDropdownContent';

interface Props {
  children: ReactNode;
  buttonOptions?: ButtonOptions;
}

const NormalDropdown = ({ children, buttonOptions }: Props) => {
  const { isModalVisible, buttonProps, useModalParams } = useModalTrigger();

  return (
    <div>
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
