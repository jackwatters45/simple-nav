import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const AlignComponent = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

export const AlignedDiv = styled.div`
  ${AlignComponent}
`;

export const AlignedButton = styled.button`
  ${AlignComponent}
  background-color: transparent;
`;

export const AlignedLink = styled(NavLink)`
  ${AlignComponent}
`;

export const StyledHamburgerNavDiv = styled.div`
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;
