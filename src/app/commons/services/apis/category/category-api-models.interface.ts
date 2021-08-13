import { IResponseById, IResponseFindAll } from './../base/model-crud.interface';
//#region Modelos para los endpoint Create y Update
export interface IRequestCreateUpdateCategory {
	name: string;
	description: string;
}
//#endregion

//#region  Modelos para el endpoint de List All
export type IResponseCategoryFindAll = IResponseFindAll<Collection>;
//#endregion

//#region Modelos para el endpoint de Customer by id
export type IResponseCategoryById = IResponseById<Collection>;
//#endregion

export interface Collection {
	categoryDescription: number;
	categoryId: string;
	categoryName: string;
}
