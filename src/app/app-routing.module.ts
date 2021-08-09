import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () => import('./pages/dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule)
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
