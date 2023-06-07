import { useModal, useModalParams } from 'react-hook-modal-pure';
import { styled } from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 100px;

  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  border-radius: 3px;
  padding: 4px;
  font-size: 0.9rem;
  margin-top: 4px;
  ${(props) => props?.theme?.shadow};
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
