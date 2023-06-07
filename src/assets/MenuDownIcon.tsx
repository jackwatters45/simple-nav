import Icon from './Icon';
import { PrefilledIconComponent, PrefilledIconProps } from '../../types/Icon.d';

const MenuDownIcon: typeof PrefilledIconComponent = (props: PrefilledIconProps) => {
  return <Icon path={'M7,10L12,15L17,10H7Z'} {...props} />;
};

export default MenuDownIcon;
