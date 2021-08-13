import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/commons/utils/utils';
import { environment } from 'src/environments/environment';
import { IRequestListAll } from './model-crud.interface';
export abstract class BaseCrudApi<
	RequestUpdateCreate,
	ResponseUpdateCreate,
	ResponsetDelete,
	ResponseAll,
	ResponseFindById
> {
	private readonly APIUrl = `${environment.host}${environment.api}${this.getResourceUrl()}`;

	abstract getResourceUrl(): string;

	constructor(protected _httpClient: HttpClient) {}

	create(requestData: RequestUpdateCreate): Observable<ResponseUpdateCreate> {
		console.log(this.APIUrl);
		return this._httpClient.post<ResponseUpdateCreate>(this.APIUrl, requestData);
	}

	update(requestData: Partial<RequestUpdateCreate>, id?: number): Observable<ResponseUpdateCreate> {
		if (id) {
			return this._httpClient.put<ResponseUpdateCreate>(`${this.APIUrl}/${id}`, requestData);
		}
		return this._httpClient.put<ResponseUpdateCreate>(this.APIUrl, requestData);
	}

	delete(id: number): Observable<ResponsetDelete> {
		const url = `${this.APIUrl}/${id}`;
		return this._httpClient.delete<ResponsetDelete>(url);
	}

	findAll(request?: IRequestListAll): Observable<ResponseAll> {
		const url = Utils.concatQueryUrl(this.APIUrl, request);
		return this._httpClient.get<ResponseAll>(url);
	}

	findById(id: number): Observable<ResponseFindById> {
		const url = `${this.APIUrl}/${id}`;
		return this._httpClient.get<ResponseFindById>(url);
	}
}
