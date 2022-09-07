import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
export interface SwitchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  checked: boolean;
  name: string;
}
