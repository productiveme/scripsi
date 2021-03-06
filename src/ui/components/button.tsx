import * as React from 'react';

export interface ButtonProps {
  onClick: (e: any) => void;
  children?: React.ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <div className='cursor-pointer hover:bg-grey-light h-full p-2' onClick={onClick}>
    { children }
  </div>
);
