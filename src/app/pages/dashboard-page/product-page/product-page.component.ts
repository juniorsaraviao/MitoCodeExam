import { MatTableDataSource } from '@angular/material/table';

import { Component } from '@angular/core';
import { IDataTable } from 'src/app/commons/models/interfaces/basic-component-model.interface';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
	public dataSource!: MatTableDataSource<unknown>;

	//constructor() {}
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
}
