import Icon from './Icon';
import { PrefilledIconComponent, IconOptions } from '../../types/Icon.d';

const MenuDownIcon: typeof PrefilledIconComponent = (props: IconOptions) => {
  return <Icon path={'M7,10L12,15L17,10H7Z'} {...props} />;
};

export default MenuDownIcon;
