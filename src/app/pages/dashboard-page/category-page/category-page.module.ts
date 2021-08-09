import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/commons/components/search/shared-components.module';
import { TableModule } from 'src/app/commons/components/table/table.module';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: CategoryPageComponent }];

@NgModule({
	declarations: [CategoryPageComponent],
	imports: [CommonModule, SharedComponentsModule, TableModule, MatButtonModule, RouterModule.forChild(routes)]
})
export class CategoryPageModule {}
