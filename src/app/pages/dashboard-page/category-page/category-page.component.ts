import { ICategory } from './../../../commons/models/interfaces/basic-component-model.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryComponent } from 'src/app/business/main-flow/category-flow/category/category.component';
import { IDataTable } from 'src/app/commons/models/interfaces/basic-component-model.interface';
import { CustomDialogService } from 'src/app/commons/services/local/custom-dialog.service';
import { CategoryApiService } from 'src/app/commons/services/apis/category/category-api.service';
import { IResponseCategoryFindAll } from 'src/app/commons/services/apis/category/category-api-models.interface';

@Component({
	selector: 'app-category-page',
	templateUrl: './category-page.component.html',
	styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
	public dataSource!: MatTableDataSource<unknown>;

	constructor(private _customDialogService: CustomDialogService, private _categoryApiService: CategoryApiService) {}
	dataTable!: IDataTable;

	ngOnInit(): void {
		this._findAllCategories();
	}

	private _loadDataTable(dataResponse: IResponseCategoryFindAll): void {
		this.dataTable = {
			columns: [
				{ title: 'id', width: '0%', hidden: true },
				{ title: 'Categoría', width: '40%' },
				{ title: 'Descripción', width: '60%' }
			],
			data: [...dataResponse.collection]
		};
	}

	private _findAllCategories(): void {
		this._categoryApiService.findAll().subscribe((data) => {
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
				component: CategoryComponent,
				title: 'Agregar nueva Categoría',
				disableAutoClose: true
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		} else {
			const afterClosed = this._customDialogService.open({
				component: CategoryComponent,
				title: 'Editar Categoría',
				disableAutoClose: true,
				value: item as ICategory
			});
			afterClosed.subscribe(() => {
				this._findAllCategories();
			});
		}
	};
}
