import { FunctionComponent } from 'react';
import { CSSProperties, RefObject, AriaAttributes } from 'react';

export declare const PrefilledIconComponent: FunctionComponent<IconOptions>;

export declare const IconComponent: FunctionComponent<IconProps>;

export interface HTMLProps extends AriaAttributes {
  className?: string;
}

export interface IconOptions extends HTMLProps {
  id?: string;
  title?: string;
  description?: string;
  size?: string;
  color?: string;
  style?: CSSProperties;
}

export interface IconProps extends IconOptions {
  path: string;
}
