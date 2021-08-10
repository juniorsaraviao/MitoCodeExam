import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuModule } from 'src/app/commons/components/menu/menu.module';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { CustomDialogComponent } from 'src/app/commons/components/custom-dialog/custom-dialog.component';

@NgModule({
	declarations: [DashboardPageComponent, CustomDialogComponent],
	imports: [
		CommonModule,
		DashboardPageRoutingModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		MatDialogModule,
		MenuModule,
		MatBadgeModule,
		MatMenuModule,
		MatToolbarModule,
		RouterModule
	]
})
export class DashboardPageModule {}
