import { Type } from '@angular/core';

export interface IDataTable {
	columns: IColumn[];
	data: unknown[];
}

export interface IColumn {
	title: string;
	width: string;
	hidden?: boolean;
}

export interface ITransferDataDialog {
	key: string;
	value: unknown;
}

export interface IDataDialog {
	component: Type<unknown>;
	dataTransfer?: ITransferDataDialog[];
	title: string;
}

export interface IConfigDialog extends IDataDialog {
	disableAutoClose?: boolean;
}
