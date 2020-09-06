import { filterType } from "../actionCreators";

export const addFilter = (id: string, data: any) => ({type: filterType.FILTER_ADD, id, data});