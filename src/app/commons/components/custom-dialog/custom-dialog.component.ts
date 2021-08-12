import { ICategory } from './../../models/interfaces/basic-component-model.interface';
import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	OnDestroy,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDataDialog, IProduct } from '../../models/interfaces/basic-component-model.interface';

@Component({
	selector: 'app-custom-dialog',
	templateUrl: './custom-dialog.component.html',
	styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnDestroy, AfterViewInit {
	@ViewChild('component', { read: ViewContainerRef, static: true })
	componentTarget!: ViewContainerRef;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	componentRef!: ComponentRef<any>;
	title!: string;

	constructor(private resolver: ComponentFactoryResolver, @Inject(MAT_DIALOG_DATA) private _dataDialog: IDataDialog) {}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this._createComponent();
		}, 0);
	}

	private _createComponent(): void {
		this.componentTarget.clear();

		const factory = this.resolver.resolveComponentFactory(this._dataDialog.component);

		this.componentRef = this.componentTarget.createComponent(factory);
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		this.componentRef.instance.value = this._dataDialog.value as IProduct | ICategory;

		this.title = this._dataDialog.title;
		if (this._dataDialog.dataTransfer) {
			this._dataDialog.dataTransfer.forEach((item) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				this.componentRef.instance[item.key] = item.value;
			});
		}
	}

	ngOnDestroy(): void {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}
}
