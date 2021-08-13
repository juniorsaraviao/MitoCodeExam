import { IRequestCreateUpdateProduct } from './../../../../commons/services/apis/product/product-api-models.interface';
import { IProduct } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/commons/services/local/message.service';
import { ProductApiService } from 'src/app/commons/services/apis/product/product-api.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ProductFlowService {
	constructor(
		private _formBuilder: FormBuilder,
		private _productApiService: ProductApiService,
		private _messageService: MessageService
	) {}

	public formGroup!: FormGroup;
	public showLoader = false;
	private _isUpdate = false;
	private _value!: IProduct;

	loadFormGroup(value?: IProduct): void {
		if (value) {
			this._isUpdate = true;
			this._value = value;
			this._productApiService.findById(value.productId!).subscribe((data) => {
				this.formGroup.patchValue(data.result);
			});
		} else {
			this.formGroup = this._formBuilder.group({
				// eslint-disable-next-line @typescript-eslint/unbound-method
				productName: [null, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				categoryId: [null, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				productPrice: [0, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				productEnabled: [0, Validators.required]
			});
		}
	}

	registerProduct(): void {
		if (this.formGroup.valid) {
			this.showLoader = true;
			if (!this._isUpdate) {
				const sendCategorie = this.formGroup.value as IRequestCreateUpdateProduct;
				this._productApiService
					.create(sendCategorie)
					.pipe(
						finalize(() => {
							this.showLoader = false;
						})
					)
					.subscribe(() => {
						const message = `El producto con nombre ${sendCategorie.productName} se guardo correctamente.`;
						this._messageService.showInfo(message, 'top right');
						this.formGroup.reset();
					});
			} else {
				const sendCategorie = this.formGroup.value as IRequestCreateUpdateProduct;
				this._productApiService
					.update(sendCategorie, this._value.productId)
					.pipe(
						finalize(() => {
							this.showLoader = false;
						})
					)
					.subscribe(() => {
						const message = `El producto con nombre ${sendCategorie.productName} se actualizó correctamente.`;
						this._messageService.showInfo(message, 'top right');
						this.formGroup.reset();
					});
			}
		}
	}
}
