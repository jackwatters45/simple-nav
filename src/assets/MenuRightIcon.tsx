import Icon from './Icon';
import { PrefilledIconComponent, PrefilledIconProps } from '../../types/Icon.d';

const MenuRightIcon: typeof PrefilledIconComponent = (props: PrefilledIconProps) => {
  return <Icon path={'M10,17L15,12L10,7V17Z'} {...props} />;
};

export default MenuRightIcon;
