import { ICategory } from './../../../commons/models/interfaces/basic-component-model.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryComponent } from 'src/app/business/main-flow/category-flow/category/category.component';
import { IDataTable } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { CustomDialogService } from 'src/app/commons/services/custom-dialog.service';

@Component({
	selector: 'app-category-page',
	templateUrl: './category-page.component.html',
	styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
	public dataSource!: MatTableDataSource<unknown>;

	constructor(private _customDialogService: CustomDialogService) {}
	data: IDataTable = {
		columns: [
			{ title: 'Nombre', width: '40%' },
			{ title: 'Descripción', width: '40%' }
		],
		data: [
			{ productId: 1, categoryName: 'Hydrogen', categoryDescription: 1.0079 },
			{ productId: 2, categoryName: 'Helium', categoryDescription: 4.0026 },
			{ productId: 3, categoryName: 'Lithium', categoryDescription: 6.941 },
			{ productId: 4, categoryName: 'Beryllium', categoryDescription: 9.0122 },
			{ productId: 5, categoryName: 'Boron', categoryDescription: 10.811 },
			{ productId: 6, categoryName: 'Carbon', categoryDescription: 12.0107 },
			{ productId: 7, categoryName: 'Nitrogen', categoryDescription: 14.0067 },
			{ productId: 8, categoryName: 'Oxygen', categoryDescription: 15.9994 },
			{ productId: 9, categoryName: 'Fluorine', categoryDescription: 18.9984 },
			{ productId: 10, categoryName: 'Neon', categoryDescription: 20.1797 }
		]
	};

	ngOnInit(): void {
		this._findAllCategories();
	}

	private _findAllCategories(): void {
		// this._categoryApiService.findAll().subscribe((data) => {
		// 	this._loadDataTable(data);
		// });
	}

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
				component: CategoryComponent,
				title: 'Agregar nueva Categoria',
				disableAutoClose: true
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		} else {
			const afterClosed = this._customDialogService.open({
				component: CategoryComponent,
				title: 'Editar Categoria',
				disableAutoClose: true,
				value: item as ICategory
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		}
	};
}
