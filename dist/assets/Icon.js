import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from 'styled-components';
const StyledSvg = styled.svg `
  width: ${({ width }) => width ?? 24}px;
  height: ${({ width }) => width ?? 24}px;
  & path {
    fill: ${(props) => props?.theme.colors.textPrimary};
  }
`;
const Icon = ({ path, ...props }) => {
    return (_jsx(StyledSvg, { ...props, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: _jsx("path", { d: path }) }));
};
export default Icon;
