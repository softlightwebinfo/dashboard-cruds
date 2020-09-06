import * as React from 'react';
import { SelectMultipleTagsTStateSelect } from "@props/TSelectMultipleTagsProps";

export interface IContextFilters {
  setValue?(id: string, selects: SelectMultipleTagsTStateSelect, data: any);
}

export const ContextFilters = React.createContext<IContextFilters>({});

export const useContextFilters = () => React.useContext(ContextFilters);
