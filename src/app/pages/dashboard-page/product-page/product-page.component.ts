import { ProductComponent } from './../../../business/main-flow/product-flow/product/product.component';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit } from '@angular/core';
import { IDataTable, IProduct } from 'src/app/commons/models/interfaces/basic-component-model.interface';
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
			{ productId: 1, productName: 'Hydrogen', category: 'Product', unitPrice: 1.0079 },
			{ productId: 2, productName: 'Helium', category: 'Product', unitPrice: 4.0026 },
			{ productId: 3, productName: 'Lithium', category: 'Product', unitPrice: 6.941 },
			{ productId: 4, productName: 'Beryllium', category: 'Product', unitPrice: 9.0122 },
			{ productId: 5, productName: 'Boron', category: 'Product', unitPrice: 10.811 },
			{ productId: 6, productName: 'Carbon', category: 'Product', unitPrice: 12.0107 },
			{ productId: 7, productName: 'Nitrogen', category: 'Product', unitPrice: 14.0067 },
			{ productId: 8, productName: 'Oxygen', category: 'Product', unitPrice: 15.9994 },
			{ productId: 9, productName: 'Fluorine', category: 'Product', unitPrice: 18.9984 },
			{ productId: 10, productName: 'Neon', category: 'Product', unitPrice: 20.1797 }
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
				value: item as IProduct
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		}
	};
}
