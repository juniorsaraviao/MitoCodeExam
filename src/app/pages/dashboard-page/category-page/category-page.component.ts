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
	clickCreateCategorie = () => {
		const afterClosed = this._customDialogService.open({
			component: CategoryComponent,
			title: 'Agregar nueva Categoria',
			disableAutoClose: true
		});
		afterClosed.subscribe(() => {
			this._findAllCategories();
		});
	};
}
