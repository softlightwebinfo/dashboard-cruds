import { SelectMultipleTagsTStateSelect } from '@props/TSelectMultipleTagsProps';
import { IDropdownMenuPropsOption } from '@props/TDropdownMenuProps';

export type FilterContainerProps = {
  options: FilterContainerPropsOption[];
  onChange: (values: SelectMultipleTagsTStateSelect, item: any, id: any) => void;
};
export type FilterContainerPropsOption = {
  id: string;
  placeholder: string;
  icon: string;
  column: string;
  options: IDropdownMenuPropsOption[];
};
export type FilterContainerState = {
  selects: SelectMultipleTagsTStateSelect;
};
