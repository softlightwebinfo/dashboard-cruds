export interface IProject {
    id: number;
    name: string;
    tables: ITable[];
}

export interface ITable {
    id: number;
    name: string;
}