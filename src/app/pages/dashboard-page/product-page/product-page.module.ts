import { ProductComponent } from './../../../business/main-flow/product-flow/product/product.component';
import { TableModule } from './../../../commons/components/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/commons/components/search/shared-components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuestionSaveDataModule } from 'src/app/commons/components/question-save-data/question-save-data.module';

const routes: Routes = [{ path: '', component: ProductPageComponent }];

@NgModule({
	declarations: [ProductPageComponent, ProductComponent],
	imports: [
		CommonModule,
		QuestionSaveDataModule,
		MatInputModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatIconModule,
		MatDatepickerModule,
		MatSelectModule,
		MatCheckboxModule,
		MatTooltipModule,
		SharedComponentsModule,
		MatDialogModule,
		MatMenuModule,
		TableModule,
		RouterModule.forChild(routes)
	]
})
export class ProductPageModule {}
