import { Type } from '@angular/core';
import { IResponseCategoryFindAll } from '../../services/apis/category/category-api-models.interface';

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
	value?: ICategory | IProduct;
	categories?: IResponseCategoryFindAll;
}

export interface IConfigDialog extends IDataDialog {
	disableAutoClose?: boolean;
}

export interface ICategory {
	categoryId?: number;
	categoryName: string;
	categoryDescription: string;
}

export interface IProduct {
	productId?: number;
	productName: string;
	category: string;
	unitPrice: number;
	enabled: boolean;
}
