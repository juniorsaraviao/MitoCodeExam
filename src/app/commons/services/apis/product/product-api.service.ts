import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudApi } from '../base/base-api.class';
import { IRequestCreateUpdateProduct, IResponseProduct, IResponseProductById } from './product-api-models.interface';

const PRODUCT = '/Product';

@Injectable({
	providedIn: 'root'
})
export class ProductApiService extends BaseCrudApi<
	IRequestCreateUpdateProduct,
	IRequestCreateUpdateProduct,
	any,
	IResponseProduct,
	IResponseProductById
> {
	constructor(protected _httpClient: HttpClient) {
		super(_httpClient);
	}

	getResourceUrl(): string {
		return PRODUCT;
	}
}
