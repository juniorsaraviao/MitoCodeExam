import { TableModule } from './../../../commons/components/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/commons/components/search/shared-components.module';

const routes: Routes = [{ path: '', component: ProductPageComponent }];

@NgModule({
	declarations: [ProductPageComponent],
	imports: [CommonModule, SharedComponentsModule, TableModule, MatButtonModule, RouterModule.forChild(routes)]
})
export class ProductPageModule {}
