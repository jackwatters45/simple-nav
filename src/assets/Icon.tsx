import { styled } from 'styled-components';
import { IconComponent, IconProps } from '../../types/Icon.d';

const StyledSvg = styled.svg<{ width?: number }>`
  width: ${({ width }) => width ?? 24}px;
  height: ${({ width }) => width ?? 24}px;
  &path {
    fill: ${(props) => props?.theme.colors.textPrimary};
  }
`;

const Icon: typeof IconComponent = ({ path, ...props }: IconProps) => {
  return (
    <StyledSvg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d={path} />
    </StyledSvg>
  );
};

export default Icon;
