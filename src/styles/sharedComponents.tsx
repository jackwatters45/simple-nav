import { css, styled } from 'styled-components';

export const AlignComponent = css`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

export const AlignedButton = styled.button`
  ${AlignComponent}
`;

export const StyledHamburgerNavLi = styled.li`
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;
