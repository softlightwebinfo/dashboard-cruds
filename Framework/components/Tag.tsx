import React from 'react';
import { TagProps } from '../props/TagProps';
import { Icon } from '@components/Icon';

export const Tag = ({ label, onClick }: TagProps) => (
  <span className={'Tag'}>
    <Icon icon={'fa fa-times'} onClick={onClick} />
    {label}
  </span>
);
