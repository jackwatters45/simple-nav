import Icon from './Icon';
import { PrefilledIconComponent, PrefilledIconProps } from '../../types/Icon.d';

const MenuIcon: typeof PrefilledIconComponent = (props: PrefilledIconProps) => {
  return <Icon path={'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'} {...props} />;
};

export default MenuIcon;
