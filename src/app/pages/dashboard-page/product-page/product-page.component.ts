import { ProductComponent } from './../../../business/main-flow/product-flow/product/product.component';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit } from '@angular/core';
import { IDataTable } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { CustomDialogService } from 'src/app/commons/services/custom-dialog.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
	public dataSource!: MatTableDataSource<unknown>;

	constructor(private _customDialogService: CustomDialogService) {}

	ngOnInit(): void {
		this._findAllCategories();
	}

	private _findAllCategories(): void {
		// this._categoryApiService.findAll().subscribe((data) => {
		// 	this._loadDataTable(data);
		// });
	}
	data: IDataTable = {
		columns: [
			{ title: 'Nombre', width: '40%' },
			{ title: 'Categoría', width: '40%' }
		],
		data: [
			{ name: 'Hydrogen', weight: 1.0079 },
			{ name: 'Helium', weight: 4.0026 },
			{ name: 'Lithium', weight: 6.941 },
			{ name: 'Beryllium', weight: 9.0122 },
			{ name: 'Boron', weight: 10.811 },
			{ name: 'Carbon', weight: 12.0107 },
			{ name: 'Nitrogen', weight: 14.0067 },
			{ name: 'Oxygen', weight: 15.9994 },
			{ name: 'Fluorine', weight: 18.9984 },
			{ name: 'Neon', weight: 20.1797 }
		]
	};

	clickCrearProducto(): void {
		console.log('hi');
	}

	demo(event: MatTableDataSource<unknown>): void {
		setTimeout(() => {
			this.dataSource = event;
		}, 0);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	clickCreateCategorie = (item?: unknown) => {
		if (!item) {
			const afterClosed = this._customDialogService.open({
				component: ProductComponent,
				title: 'Agregar un nuevo Producto',
				disableAutoClose: true
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		} else {
			const afterClosed = this._customDialogService.open({
				component: ProductComponent,
				title: 'Editar Producto',
				disableAutoClose: true,
				value: item
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		}
	};
}
