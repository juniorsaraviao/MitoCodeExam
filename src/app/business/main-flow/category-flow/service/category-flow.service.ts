import { ICategory } from './../../../../commons/models/interfaces/basic-component-model.interface';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/commons/services/local/message.service';
import { CategoryApiService } from 'src/app/commons/services/apis/category/category-api.service';
import { IRequestCreateUpdateCategory } from 'src/app/commons/services/apis/category/category-api-models.interface';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CategoryFlowService {
	constructor(
		private _formBuilder: FormBuilder,
		private _categoryApiService: CategoryApiService,
		private _messageService: MessageService
	) {}

	public formGroup!: FormGroup;
	public showLoader = false;
	private _isUpdate = false;
	private _value!: ICategory;

	loadFormGroup(value?: ICategory): void {
		if (value) {
			this._isUpdate = true;
			this._value = value;
			this.formGroup = this._formBuilder.group({
				// eslint-disable-next-line @typescript-eslint/unbound-method
				name: [value?.categoryName, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				description: [value?.categoryDescription, Validators.required]
			});
		} else {
			this.formGroup = this._formBuilder.group({
				// eslint-disable-next-line @typescript-eslint/unbound-method
				name: [null, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				description: [null, Validators.required]
			});
		}
	}

	registerCategorie(): void {
		if (this.formGroup.valid) {
			this.showLoader = true;
			if (!this._isUpdate) {
				const sendCategorie = this.formGroup.value as IRequestCreateUpdateCategory;
				this._categoryApiService
					.create(sendCategorie)
					.pipe(
						finalize(() => {
							this.showLoader = false;
						})
					)
					.subscribe(() => {
						const message = `La categoría con nombre ${sendCategorie.name} se guardo correctamente.`;
						this._messageService.showInfo(message, 'top right');
						this.formGroup.reset();
					});
			} else {
				const sendCategorie = this.formGroup.value as IRequestCreateUpdateCategory;
				this._categoryApiService
					.update(sendCategorie, this._value.categoryId)
					.pipe(
						finalize(() => {
							this.showLoader = false;
						})
					)
					.subscribe(() => {
						const message = `La categoría con nombre ${sendCategorie.name} se actualizó correctamente.`;
						this._messageService.showInfo(message, 'top right');
						this.formGroup.reset();
					});
			}
		}
	}
}
