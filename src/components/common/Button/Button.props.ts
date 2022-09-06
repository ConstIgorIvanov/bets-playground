import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  fontSize: 'small' | 'medium' | 'extra-small';
  activeColor?: boolean;
  hoverGreen?: boolean;
  task?: 'default' | 'watch' | 'bet' | 'icon';
  active?: boolean;
}
