import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
export const RegularNavContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 2vw;
`;
const RegularNav = ({ children, className }) => {
    return (_jsx(RegularNavContainer, { className: `${className} regular-nav`, children: children }));
};
export default RegularNav;
