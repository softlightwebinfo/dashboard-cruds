import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEventHandler } from 'react';

export type InputProps = {
  value: string;
  onChange?: OnChange;
  placeholder?: string;
  className?: string;
  onEnter?: OnEnter;
  onKeyDown?: OnKeyDown;
  type?: TInputType;
  onFocus?: OnFocusInput;
  onBlur?: OnBlurInput;
  onClick?: OnClick;
};
export type OnChange = (evt: ChangeEvent<HTMLInputElement>) => void;
export type OnEnter = (evt: KeyboardEventHandler<HTMLInputElement>) => void;
export type OnKeyDown = (evt: KeyboardEventHandler<HTMLInputElement>) => void;
export type TInputType = 'text' | 'email' | 'password' | 'tel' | 'number';
export type OnFocusInput = (evt: FocusEvent<HTMLInputElement>) => void;
export type OnBlurInput = OnFocusInput;
export type OnClick = (evt: MouseEvent) => void;
