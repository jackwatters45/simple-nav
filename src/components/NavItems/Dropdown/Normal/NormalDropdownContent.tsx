import { useModal, useModalParams } from 'react-hook-modal-pure';
import { styled } from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 100px;
`;

interface Props {
  useModalParams: useModalParams;
  children: ReactNode;
  className?: string;
}

const NormalDropdownContent = ({ useModalParams, children, className }: Props) => {
  const modalProps = useModal(useModalParams);

  return (
    <Container {...modalProps} className={className}>
      {children}
    </Container>
  );
};

export default NormalDropdownContent;
