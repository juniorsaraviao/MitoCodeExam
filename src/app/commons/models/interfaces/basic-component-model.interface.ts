export interface IDataTable {
	columns: IColumn[];
	data: unknown[];
}

export interface IColumn {
	title: string;
	width: string;
	hidden?: boolean;
}
