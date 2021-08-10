import { CategoryComponent } from './../../../business/main-flow/category-flow/category/category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/commons/components/search/shared-components.module';
import { TableModule } from 'src/app/commons/components/table/table.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionSaveDataModule } from 'src/app/commons/components/question-save-data/question-save-data.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: CategoryPageComponent }];

@NgModule({
	declarations: [CategoryPageComponent, CategoryComponent],
	imports: [
		CommonModule,
		QuestionSaveDataModule,
		SharedComponentsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		TableModule,
		MatButtonModule,
		RouterModule.forChild(routes)
	]
})
export class CategoryPageModule {}
