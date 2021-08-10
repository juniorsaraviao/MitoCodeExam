import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search.component';

@NgModule({
	declarations: [SearchComponent],
	imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule],
	exports: [SearchComponent]
})
export class SharedComponentsModule {}
