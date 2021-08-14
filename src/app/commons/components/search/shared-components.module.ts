import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_PAGINATOR_PROVIDER } from '../../services/local/custom-paginator.service';
import { SearchComponent } from './search.component';

@NgModule({
	declarations: [SearchComponent],
	imports: [CommonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule],
	exports: [SearchComponent],
	providers: [MAT_PAGINATOR_PROVIDER]
})
export class SharedComponentsModule {}
