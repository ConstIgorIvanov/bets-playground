import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  fontSize: 'small' | 'medium';
  activeColor: boolean;
  hoverColor: 'default' | 'green';
  backgroundColor: 'default' | 'green';
}