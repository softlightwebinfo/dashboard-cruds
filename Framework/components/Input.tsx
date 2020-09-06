import React from 'react';
import { InputProps } from '../props/InputProps';

export const Input = (props: InputProps) => {
  const {
    onKeyDown,
    onBlur,
    onClick,
    onFocus,
    type = 'text',
    value,
    onChange,
    onEnter,
    className = 'Input',
    placeholder,
  } = props;

  const eOnKeyDown = (e) => {
    onKeyDown && onKeyDown(e);
    if (e.key == 'Enter') {
      onEnter && onEnter(e);
    }
  };

  return (
    <input
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      onKeyDown={eOnKeyDown}
      type={type}
    />
  );
};
