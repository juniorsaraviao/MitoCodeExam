import { CategoryComponent } from './../../../business/main-flow/category-flow/category/category.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './category-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/commons/components/search/shared-components.module';
import { QuestionSaveDataModule } from 'src/app/commons/components/question-save-data/question-save-data.module';

const routes: Routes = [{ path: '', component: CategoryPageComponent }];

@NgModule({
	declarations: [CategoryPageComponent, CategoryComponent],
	imports: [CommonModule, QuestionSaveDataModule, SharedComponentsModule, RouterModule.forChild(routes)]
})
export class CategoryPageModule {}
