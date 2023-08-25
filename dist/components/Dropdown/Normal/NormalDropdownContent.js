import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from 'react-hook-modal-pure';
import { styled } from 'styled-components';
const Container = styled.div `
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
const NormalDropdownContent = ({ useModalParams, children }) => {
    const modalProps = useModal({
        ...useModalParams,
        options: { rightPositionDistance: 16 },
    });
    return (_jsx(Container, { ...modalProps, className: `normal-dropdown-content`, children: children }));
};
export default NormalDropdownContent;
