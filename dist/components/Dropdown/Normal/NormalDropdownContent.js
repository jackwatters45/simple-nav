import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from 'react-hook-modal-pure';
import { styled } from 'styled-components';
const Container = styled.div `
  position: absolute;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props?.theme?.colors?.backgroundSecondary};
  border-radius: 3px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  margin-top: 4px;
  ${(props) => props?.theme?.shadow};
`;
const NormalDropdownContent = ({ useModalParams, children, className }) => {
    const modalProps = useModal(useModalParams);
    return (_jsx(Container, { ...modalProps, className: `${className} normal-dropdown-content`, children: children }));
};
export default NormalDropdownContent;
