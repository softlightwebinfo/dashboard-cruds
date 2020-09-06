import React from 'react';
import { IconProps } from '@props/IconProps';

export const Icon = ({ icon, onClick }: IconProps) => <i onClick={onClick} className={['Icon', icon].join(' ')} />;
