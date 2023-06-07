import { FunctionComponent } from 'react';

export declare const PrefilledIconComponent: FunctionComponent<PrefilledIconProps>;

export declare const IconComponent: FunctionComponent<IconProps>;

import { CSSProperties, RefObject, AriaAttributes } from 'react';

export interface HTMLProps extends AriaAttributes {
  className?: string;
}

export interface IconProps extends HTMLProps {
  path: string;
  id?: string;
  title?: string | null;
  description?: string | null;
  size?: number | string | null;
  color?: string;
  style?: CSSProperties;
}

export interface PrefilledIconProps extends HTMLProps {
  id?: string;
  title?: string;
  description?: string;
  size?: string;
  color?: string;
  style?: CSSProperties;
}
