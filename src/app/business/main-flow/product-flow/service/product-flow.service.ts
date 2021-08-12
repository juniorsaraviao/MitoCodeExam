import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/commons/services/message.service';

@Injectable()
export class ProductFlowService {
	constructor(private _formBuilder: FormBuilder, private _messageService: MessageService) {}

	public formGroup!: FormGroup;
	public showLoader = false;

	loadFormGroup(value?: any): void {
		if (value) {
			// TODO create a model to map directly
			this.formGroup = this._formBuilder.group({
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				//name: [value?.name, Validators.required],
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				//category: ['one', Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				//unitprice: [0, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				//available: [true, Validators.required]
			});
		} else {
			this.formGroup = this._formBuilder.group({
				// eslint-disable-next-line @typescript-eslint/unbound-method
				name: [null, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				category: [null, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				unitprice: [0, Validators.required],
				// eslint-disable-next-line @typescript-eslint/unbound-method
				available: [0, Validators.required]
			});
		}
	}

	registerCategorie(): void {
		if (this.formGroup.valid) {
			this.showLoader = true;
			// const sendCategorie = this.formGroup.value as IRequestCreateUpdateCategory;
			// this._categoryApiService
			// 	.create(sendCategorie)
			// 	.pipe(
			// 		finalize(() => {
			// 			this.showLoader = false;
			// 		})
			// 	)
			// 	.subscribe(() => {
			// 		const message = `La categoría con nombre ${sendCategorie.name} se guardo correctamente.`;
			// 		this._messageService.showInfo(message, 'top right');
			// 		this.formGroup.reset();
			// 	});
		}
	}
}