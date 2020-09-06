export type IDropdownMenuProps = {
  options: IDropdownMenuPropsOption[];
  onClick: IDropdownMenuPropsOnClick;
  show: boolean;
};
export type IDropdownMenuPropsOption = {
  id: string;
  label: string;
};
export type IDropdownMenuPropsOnClick = (e: IDropdownMenuPropsOption, index: number) => void;
