export interface IFilterReducer {
    filters: IFilterReducerFilter;
}

export type IFilterReducerFilter = {
    [p: string]: any;
}