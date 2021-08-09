import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardPageComponent,
		children: [
			{
				path: 'productos',
				loadChildren: () => import('./product-page/product-page.module').then((m) => m.ProductPageModule)
			},
			{
				path: 'categorias',
				loadChildren: () => import('./category-page/category-page.module').then((m) => m.CategoryPageModule)
			},
			{
				path: '**',
				redirectTo: 'categorias',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
