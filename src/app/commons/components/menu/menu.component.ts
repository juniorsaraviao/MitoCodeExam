import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
	constructor(private _router: Router) {}

	public listMenu = [
		{ name: 'Productos', path: '/dashboard/productos', icon: 'point_of_sale' },
		{ name: 'Categorias', path: '/dashboard/categorias', icon: 'category' }
	];
}
