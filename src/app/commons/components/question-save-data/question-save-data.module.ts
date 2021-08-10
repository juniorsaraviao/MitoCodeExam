import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionSaveDataComponent } from './question-save-data.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
	declarations: [QuestionSaveDataComponent],
	imports: [CommonModule, LoaderModule],
	exports: [QuestionSaveDataComponent]
})
export class QuestionSaveDataModule {}
