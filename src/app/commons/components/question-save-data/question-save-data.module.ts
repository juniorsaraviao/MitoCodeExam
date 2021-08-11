import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSaveDataComponent } from './question-save-data.component';
import { LoaderModule } from '../loader/loader.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [QuestionSaveDataComponent],
	imports: [CommonModule, LoaderModule, MatButtonModule],
	exports: [QuestionSaveDataComponent]
})
export class QuestionSaveDataModule {}
