export interface IResponseFindAll<T> {
	collection: T[];
	totalPages: number;
}

export interface IRequestListAll {
	filter?: string;
	page?: number;
	rows?: number;
}
//#endregion

//#region  Modelos para el endpoint de find by id
export interface IResponseById<T> {
	success: boolean;
	result: T;
}
