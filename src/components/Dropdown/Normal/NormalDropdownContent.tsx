import { useModal, useModalParams } from 'react-hook-modal-pure';
import { styled } from 'styled-components';
import { ReactNode } from 'react';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 100;

  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  margin-top: 4px;
  ${(props) => props?.theme?.shadow};
`;

interface Props {
  useModalParams: useModalParams;
  children: ReactNode;
}

const NormalDropdownContent = ({ useModalParams, children }: Props) => {
  const modalProps = useModal({
    ...useModalParams,
    options: { rightPositionDistance: 16 },
  });

  return (
    <Container {...modalProps} className={`normal-dropdown-content`}>
      {children}
    </Container>
  );
};

export default NormalDropdownContent;
