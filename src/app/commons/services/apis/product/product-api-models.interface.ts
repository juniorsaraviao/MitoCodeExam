import { IResponseById, IResponseFindAll } from './../base/model-crud.interface';
//#region Modelos para los endpoint Create y Update
export interface IRequestCreateUpdateProduct {
	productName: string;
	categoryId: number;
	productPrice: number;
	productEnabled: boolean;
}

//#endregion

//#region  Modelos para el endpoint de List All
export type IResponseProduct = IResponseFindAll<Collection>;

//#endregion

//#region Modelos para el endpoint de Customer by id
export type IResponseProductById = IResponseById<Product>;

//#endregion
interface Product {
	productId: number;
	productName: string;
	categoryId: number;
	productPrice: number;
	productUrlImage: string;
	productEnabled: boolean;
}

interface Collection {
	productId: number;
	productName: string;
	category: string;
	unitPrice: number;
}
