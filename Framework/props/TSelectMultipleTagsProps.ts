import { IDropdownMenuPropsOption } from './TDropdownMenuProps';

export type SelectMultipleTagsTState = {
  selects: SelectMultipleTagsTStateSelect;
  value: string;
  open: boolean;
};
export type SelectMultipleTagsTProps = {
  id: string;
  icon: string;
  placeholder: string;
  options: IDropdownMenuPropsOption[];
  onChange?: (e: SelectMultipleTagsTStateSelect) => void;
  data?: any;
};
export type SelectMultipleTagsTStateSelect = {
  [p: string]: IDropdownMenuPropsOption;
};
