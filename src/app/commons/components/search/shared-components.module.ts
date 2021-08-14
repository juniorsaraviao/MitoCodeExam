import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from '../table/table.module';
import { SearchComponent } from './search.component';

@NgModule({
	declarations: [SearchComponent],
	imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule],
	exports: [
		SearchComponent,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		TableModule,
		MatButtonModule
	]
})
export class SharedComponentsModule {}
