import React from 'react';
import { IDropdownMenuProps } from '@props/TDropdownMenuProps';

export const DropdownMenu = ({ options, onClick, show }: IDropdownMenuProps) => {
  if (!show) return null;
  return (
    <ul className={'DropdownMenu'}>
      {options.map((item, index) => (
        <li onClick={() => onClick(item, index)} className={'DropdownMenu__item'} key={item.id}>
          {item.label}
        </li>
      ))}
    </ul>
  );
};
