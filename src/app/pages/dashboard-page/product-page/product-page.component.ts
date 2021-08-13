import { ProductApiService } from './../../../commons/services/apis/product/product-api.service';
import { ProductComponent } from './../../../business/main-flow/product-flow/product/product.component';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit } from '@angular/core';
import { IDataTable, IProduct } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { CustomDialogService } from 'src/app/commons/services/local/custom-dialog.service';
import { IResponseProduct } from 'src/app/commons/services/apis/product/product-api-models.interface';
import { CategoryApiService } from 'src/app/commons/services/apis/category/category-api.service';
import { IResponseCategoryFindAll } from 'src/app/commons/services/apis/category/category-api-models.interface';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
	public dataSource!: MatTableDataSource<unknown>;

	constructor(
		private _customDialogService: CustomDialogService,
		private _productApiServices: ProductApiService,
		private _categoryApiService: CategoryApiService
	) {}
	dataTable!: IDataTable;
	categories!: IResponseCategoryFindAll;

	ngOnInit(): void {
		this._findAllProducts();
	}

	private _loadDataTable(dataResponse: IResponseProduct): void {
		this.dataTable = {
			columns: [
				{ title: 'id', width: '0%', hidden: true },
				{ title: 'Nombre', width: '40%' },
				{ title: 'Categoría', width: '60%' }
			],
			data: [...dataResponse.collection]
		};
	}

	private _findAllProducts(): void {
		this._productApiServices.findAll().subscribe((data) => {
			this._loadDataTable(data);
		});
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
				this._findAllProducts();
			});
		} else {
			const afterClosed = this._customDialogService.open({
				component: ProductComponent,
				title: 'Editar Producto',
				disableAutoClose: true,
				value: item as IProduct,
				categories: this.categories
			});
			afterClosed.subscribe(() => {
				this._findAllProducts();
			});
		}
	};
}
